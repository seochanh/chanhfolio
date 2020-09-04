"use strict";

const aboutButton = document.querySelector(".menu__about");
const worksButton = document.querySelector(".menu__works");

function pageTransition(c) {
  const page = document.querySelector(`.${c}`),
        box = document.querySelector(`.menu__${c}-box`);
  page.classList.toggle(`${c}--active`);
  box.classList.toggle(`.menu__${c}-box--active`);
}

worksButton.addEventListener('click', function() {
  pageTransition('works');
});
aboutButton.addEventListener('click', function() {
  pageTransition('about');
});