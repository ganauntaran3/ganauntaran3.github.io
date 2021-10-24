// Const
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav_link");

// Show
function toggleShow() {
  navMenu.classList.toggle("show");
}
toggleMenu.addEventListener("click", toggleShow);

//Hide
function hideShow() {
  navMenu.classList.remove("show");
}
closeMenu.addEventListener("click", hideShow);
navLink.forEach(n => n.addEventListener("click", hideShow));

//Scroll section active link
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
