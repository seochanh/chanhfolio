"use strict";

// const skill = document.querySelector('.about__skills-item');
// console.log(skills[1].previousElementSibling);


function skillScroll(e) {
  const tag = 'ARTICLE';
  // const main = document.querySelector('.about__main');
  let target = e.target;

  // if (target == title) {
  //   target = main;
  // } else 
  if (target.nodeName != tag) { 
    target = target.closest(tag);
  };
  const prev = skills.previousElementSibling,
        next = skills.nextElementSibling;

  if (e.deltaY < 0) { // Wheel scrolled up
    e.preventDefault;
    prev.classList.toggle('about__skills-item--active');
  } else if (e.deltaY > 0) { // Wheel scrolled down
    e.preventDefault;
    next.classList.toggle('about__skills-item--active');
  } else {
    return false;
  }
}

about.addEventListener('wheel', scrollMouse);
title.addEventListener('wheel', scrollMouse);