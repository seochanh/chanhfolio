"use strict";

const skill = document.querySelectorAll('.about__skills-item'),
      gauge = document.querySelector('.about__skills-gauge'),
      gaugePercent = [95, 80, 85, 90, 75],
      skillText = document.querySelectorAll('.about__skills-text');

function skillClick(idx) {
  skill[idx].addEventListener('click', function() {
    for(let i = 0; i < skill.length; i++) {
      skill[i].classList.remove('about__skills-item--active');
      skillText[i].classList.remove('about__skills-text--active');
    }
    skill[idx].classList.toggle('about__skills-item--active');
    gauge.style.width = gaugePercent[idx] + '%';
    skillText[idx].classList.toggle('about__skills-text--active')
  });
}

for(let i = 0; i < skill.length; i++) {
  skillClick(i);
}