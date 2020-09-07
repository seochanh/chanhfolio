"use strict";

const skill = document.querySelectorAll('.about__skills-item');
const skillIdx = 

function clickSkill(i, c) {
  skill[i].classList.remove(`${c}--active`);
  skill[i].classList.toggle(`${c}--active`);
}

skill[idx].addEventListener('click', function(idx) {
  skill[idx].clickSkill('about__skills-item');
});

var li = document.querySelectorAll('li');

function li_click(idx){
    li[idx].onclick = function(){
        console.log(idx);
        if(li[idx].getAttribute('class')!='active'){
            for(var i=0;i<li.length;i++){
                li[i].removeAttribute('class');
            }
            li[idx].setAttribute('class', 'active');    
        } else{
            li[idx].removeAttribute('class');
        }
        
    };
}
for(var i=0; i<li.length; i++){
  li_click(i);
}