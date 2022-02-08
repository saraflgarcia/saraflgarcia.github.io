//Highlight Nav Menu on scroll - through sections

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .menu ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute("id");
    }
  })

  navLi.forEach( li => {
    li.classList.remove("current");
    if (li.classList.contains(current)) {
      li.classList.add("current")
    }
  })
})

//Change Nav Menu background color & font color on scroll

const navBar = document.querySelector("nav .menu")

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    navBar.classList.add('scrolled')
  } else {
    navBar.classList.remove('scrolled')
  }
}