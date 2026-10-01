// Mobile menu toggle + scroll-to-top button
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".header__hamburger");
  var menu = document.getElementById("header-menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var top = document.querySelector(".scroll-top");
  if (top) {
    var onScroll = function () { top.classList.toggle("show", window.scrollY > 300); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
