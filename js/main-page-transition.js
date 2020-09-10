"use strict";

const aboutButton = document.querySelector(".menu__about"),
      worksButton = document.querySelector(".menu__works"),
      titleText = document.querySelector(".title__text"),
      logo = document.querySelector(".logo"),
      smallLogo = document.querySelector(".logo--small");

function pageTransition(c) {
  const page = document.querySelector(`.${c}`),
        box = document.querySelector(`.menu__${c}-box`);
  page.classList.toggle(`${c}--active`);
  box.classList.toggle(`menu__${c}-box--active`);
}

worksButton.addEventListener('click', function() {
  pageTransition('works');
  logo.classList.toggle('hidden');
  smallLogo.classList.toggle('hidden');
});

aboutButton.addEventListener('click', function() {
  pageTransition('about');
  title.classList.toggle(`title--active`);
  titleText.classList.toggle('hidden');
});