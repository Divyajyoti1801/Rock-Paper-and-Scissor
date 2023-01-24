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