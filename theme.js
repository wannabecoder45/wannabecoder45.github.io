/* Runs before the page paints: marks that scripts work, switches on motion
   unless the reader has asked for less of it, and applies a theme the reader
   chose on an earlier visit. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  try {
    if ('IntersectionObserver' in window && window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.classList.add('motion');
    }
  } catch (e) {}
  try {
    var saved = localStorage.getItem('sg-theme');
    if (saved === 'dark' || saved === 'light') { root.setAttribute('data-theme', saved); }
  } catch (e) {}
})();
