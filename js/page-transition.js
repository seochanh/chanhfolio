const aboutButton = document.querySelector(".menu__about");

const worksButton = document.querySelector(".menu__works");

aboutButton.addEventListener('click', function() {
  const about = document.querySelector(".about");
  about.classList.toggle("active");
});

worksButton.addEventListener('click', function() {
  const works = document.querySelector(".works");
  works.classList.toggle("active");
});
