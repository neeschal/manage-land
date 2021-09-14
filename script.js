const mobileNav = document.getElementsByClassName("mobile")[0];
const ham = document.getElementsByClassName("ham")[0];
const clos = document.getElementsByClassName("close")[0];
const nav = document.getElementsByClassName("navigation")[0];
const pointers = document.querySelectorAll(".point");
const slides = document.getElementsByClassName("s-cards")[0];

mobileNav.addEventListener("click", (e) => {
  e.preventDefault();
  ham.classList.toggle("hide");
  clos.classList.toggle("hide");
  nav.classList.toggle("hide");
});

pointers.forEach((element) => {
  element.addEventListener("click", () => {
    if (element == pointers[0]) {
      slides.style.transform = "translateX(0%)";
      pointers[0].classList.add("active");
      pointers[1].classList.remove("active");
      pointers[2].classList.remove("active");
      pointers[3].classList.remove("active");
    } else if (element == pointers[1]) {
      slides.style.transform = "translateX(-110%)";
      pointers[0].classList.remove("active");
      pointers[1].classList.add("active");
      pointers[2].classList.remove("active");
      pointers[3].classList.remove("active");
    } else if (element == pointers[2]) {
      slides.style.transform = "translateX(-220%)";
      pointers[0].classList.remove("active");
      pointers[1].classList.remove("active");
      pointers[2].classList.add("active");
      pointers[3].classList.remove("active");
    } else if (element == pointers[3]) {
      slides.style.transform = "translateX(-330%)";
      pointers[0].classList.remove("active");
      pointers[1].classList.remove("active");
      pointers[2].classList.remove("active");
      pointers[3].classList.add("active");
    }
  });
});
