const aboutButton = document.querySelector(".menu__about");

const worksButton = document.querySelector(".menu__works");

aboutButton.addEventListener('click', function() {
  const aboutPage = document.querySelector(".about");
  const aboutTitle = document.querySelector(".menu__about-box")
  aboutPage.classList.toggle("active");
  aboutTitle.classList.toggle("active");
});

worksButton.addEventListener('click', function() {
  const worksPage = document.querySelector(".works");
  const worksTitle = document.querySelector(".menu__works-box");
  worksPage.classList.toggle("active");
  worksTitle.classList.toggle("active");
});
