//Rule Feature

const rule_btn = document.querySelector(".footer__cta");
const rule_btn_close = document.querySelector('.rules__card--content--closer--img');
const rule = document.querySelector('.rules');

rule_btn.addEventListener('click', (e) => {
    e.preventDefault();
    rule.classList.remove('hidden');
});

rule_btn_close.addEventListener('click', (e) => {
    e.preventDefault();
    rule.classList.add('hidden');
})

window.addEventListener('load', (e) => {
    e.preventDefault();
    rule.classList.remove('hidden');
})

//Mobile-Rules Card
const mobile_btn_close = document.querySelector('.rules__mobile--closer');

rule_btn.addEventListener('click', (e) => {
    e.preventDefault();
    rule.classList.remove('hidden');
});

mobile_btn_close.addEventListener('click',e => {
    e.preventDefault();
    rule.classList.add('hidden');
})

///////////////////////////////////////////////////////////////
const choice = ["rock", "paper", "scissor"];

const p_paper = document.querySelector(".game__segment-1--paper");
const p_scissor = document.querySelector(".game__segment-1--scissor");
const p_rock = document.querySelector(".game__segment-2--rock");

let player_choice = '';

p_paper.addEventListener('click', (e) => {
    e.preventDefault();
    player_choice = choice[0];
    
})

