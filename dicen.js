/*this makes navbar sticky*/

window.addEventListener("scroll", function () {
  let navbar = document.querySelector("#navbar");
  navbar.classList.toggle("sticky-nav", window.scrollY > 0)


})
