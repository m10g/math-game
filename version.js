// Shared version — update this one number for every release
var APP_VERSION = 'v1.3.2';

// Guard: sw.js imports this file too, but has no document/navigator
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    var el = document.querySelector('.app-footer');
    if (el) el.textContent = APP_VERSION;
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(reg) {
      reg.addEventListener('updatefound', function() {
        var newSW = reg.installing;
        newSW.addEventListener('statechange', function() {
          if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner();
          }
        });
      });
    });
  }
}

function showUpdateBanner() {
  var banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#1E293B;color:#fff;padding:12px 24px;border-radius:14px;font-size:0.95rem;font-weight:600;cursor:pointer;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.3);white-space:nowrap;';
  banner.textContent = '🎉 New version available — tap to update!';
  banner.onclick = function() { window.location.reload(); };
  document.body.appendChild(banner);
}
