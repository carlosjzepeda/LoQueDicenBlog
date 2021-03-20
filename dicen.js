/*this makes nav sticky*/

window.addEventListener("scroll",function() {
  var navbar = document.querySelector("#navbar");
  navbar.classList.toggle("sticky" , window.scrollY > 0)
  
})

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}