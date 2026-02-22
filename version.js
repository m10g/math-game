// Shared version — update here to change all pages
var APP_VERSION = 'v1.1.3';
document.addEventListener('DOMContentLoaded', function() {
  var el = document.querySelector('.app-footer');
  if (el) el.textContent = APP_VERSION;
});
