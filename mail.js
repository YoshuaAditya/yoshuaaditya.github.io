// Assembles email links in the browser so the address is not present in the raw HTML.
(function () {
  document.querySelectorAll('a[data-u][data-d]').forEach(function (el) {
    var addr = el.getAttribute('data-u') + '@' + el.getAttribute('data-d');
    el.href = 'mailto:' + addr;
    if (el.hasAttribute('data-show')) el.textContent = addr;
  });
})();
