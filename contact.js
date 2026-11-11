// Floating "Ask a question" button + modal form. Posts to the GPV worker,
// which relays the message by email via Resend (the key never touches this page).
(function () {
  var ENDPOINT = 'https://gpv-worker.peterjvacca.workers.dev/api/v1/contact';
  // Public Cloudflare Turnstile site key (safe to commit). Replace the
  // placeholder with the real one from the Cloudflare dashboard.
  var TURNSTILE_SITE_KEY = '0x4AAAAAAF2WydXAHMcDn1bP';

  var css = document.createElement('style');
  css.textContent =
    '.cf-fab{position:fixed;right:20px;bottom:20px;z-index:50;background:#FFD100;color:#111;border:3px solid #111;border-radius:3px;padding:10px 18px;font:800 18px/1 \'Barlow Condensed\',\'Arial Narrow\',sans-serif;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;box-shadow:0 6px 14px rgba(17,17,17,.3)}' +
    '.cf-fab:hover{background:#fff}.cf-fab:focus-visible,.cf-dlg button:focus-visible,.cf-dlg input:focus-visible,.cf-dlg textarea:focus-visible{outline:3px solid #0B5CAD;outline-offset:2px}' +
    '.cf-dlg{border:3px solid #111;border-radius:3px;padding:24px;width:min(420px,calc(100vw - 32px));font:15px Barlow,system-ui,sans-serif;color:#111;box-shadow:0 20px 50px rgba(17,17,17,.4)}' +
    '.cf-dlg::backdrop{background:rgba(17,17,17,.6)}.cf-dlg h2{margin:0 0 4px;color:#111;font:800 28px/1.05 \'Barlow Condensed\',\'Arial Narrow\',sans-serif;letter-spacing:.06em;text-transform:uppercase}.cf-dlg p{margin:0 0 14px;font-size:14px}' +
    '.cf-dlg label{display:block;margin:10px 0 4px;font-weight:600;font-size:14px}' +
    '.cf-dlg input,.cf-dlg textarea{width:100%;box-sizing:border-box;border:2px solid #111;border-radius:3px;padding:9px 10px;font:inherit}' +
    '.cf-dlg textarea{min-height:110px;resize:vertical}.cf-row{display:flex;gap:10px;justify-content:flex-end;margin-top:16px}' +
    '.cf-dlg button{border-radius:3px;padding:9px 16px;font:800 17px/1 \'Barlow Condensed\',\'Arial Narrow\',sans-serif;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;border:2px solid #111;background:#fff;color:#111}' +
    '.cf-dlg button[type=submit]{background:#111;border-color:#111;color:#FFD100}.cf-dlg button:disabled{opacity:.6;cursor:default}' +
    '.cf-status{min-height:20px;margin-top:10px;font-size:14px}.cf-status.err{color:#b91c1c}.cf-status.ok{color:#15803d}' +
    '.cf-hp{position:absolute;left:-9999px;height:0;overflow:hidden}';
  document.head.appendChild(css);

  var fab = document.createElement('button');
  fab.className = 'cf-fab';
  fab.type = 'button';
  fab.textContent = 'Ask a question';

  var dlg = document.createElement('dialog');
  dlg.className = 'cf-dlg';
  dlg.setAttribute('aria-labelledby', 'cf-title');
  dlg.innerHTML =
    '<form method="dialog" novalidate>' +
    '<h2 id="cf-title">Ask a question</h2><p>Send us a message and we\'ll reply by email.</p>' +
    '<label for="cf-name">Name</label><input id="cf-name" name="name" maxlength="100" autocomplete="name" required>' +
    '<label for="cf-email">Email</label><input id="cf-email" name="email" type="email" maxlength="200" autocomplete="email" required>' +
    '<label for="cf-msg">Question</label><textarea id="cf-msg" name="message" maxlength="4000" required></textarea>' +
    '<div class="cf-hp" aria-hidden="true"><label>Website <input name="website" tabindex="-1" autocomplete="off"></label></div>' +
    '<div class="cf-captcha"></div>' +
    '<div class="cf-status" role="status" aria-live="polite"></div>' +
    '<div class="cf-row"><button type="button" class="cf-close">Close</button><button type="submit">Send</button></div>' +
    '</form>';
  document.body.appendChild(fab);
  document.body.appendChild(dlg);

  var form = dlg.querySelector('form');
  var status = dlg.querySelector('.cf-status');
  var send = dlg.querySelector('button[type=submit]');
  function say(text, cls) { status.textContent = text; status.className = 'cf-status ' + (cls || ''); }

  var widgetId = null, token = '';
  function loadCaptcha() {
    if (window.turnstile) return renderCaptcha();
    var sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    sc.async = true; sc.onload = renderCaptcha;
    document.head.appendChild(sc);
  }
  function renderCaptcha() {
    if (widgetId !== null || !window.turnstile) return;
    widgetId = window.turnstile.render(dlg.querySelector('.cf-captcha'), {
      sitekey: TURNSTILE_SITE_KEY,
      callback: function (t) { token = t; },
      'expired-callback': function () { token = ''; },
      'error-callback': function () { token = ''; }
    });
  }
  function resetCaptcha() { token = ''; if (widgetId !== null) window.turnstile.reset(widgetId); }

  fab.addEventListener('click', function () { say(''); dlg.showModal(); form.name.focus(); loadCaptcha(); });
  dlg.querySelector('.cf-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { say('Please fill in your name, a valid email and your question.', 'err'); return; }
    if (!token) { say('Please complete the verification check.', 'err'); return; }
    send.disabled = true; say('Sending…');
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.name.value, email: form.email.value, message: form.message.value, website: form.website.value, turnstileToken: token })
    }).then(function (r) {
      if (r.status === 403 || (r.status === 400)) { resetCaptcha(); }
      if (r.status === 429) throw new Error('Too many messages — please try again in a minute.');
      if (!r.ok) throw new Error('Sorry, that did not send. Please try again later.');
      form.reset(); say('Thanks! Your message was sent.', 'ok');
    }).catch(function (err) {
      say(err instanceof TypeError ? 'Could not reach the server. Check your connection and try again.' : err.message, 'err');
    }).then(function () { resetCaptcha(); send.disabled = false; });
  });
})();
