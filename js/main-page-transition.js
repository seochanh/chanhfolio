"use strict";

const aboutButton = document.querySelector(".menu__about");
const worksButton = document.querySelector(".menu__works");

function pageTransition(c) {
  const page = document.querySelector(`.${c}`),
        title = document.querySelector(`.menu__${c}-box`);
  page.classList.toggle(`${c}--active`);
  title.classList.toggle(`${c}__title--active`);
}

worksButton.addEventListener('click', function() {
  pageTransition('works');
});
aboutButton.addEventListener('click', function() {
  pageTransition('about');
});