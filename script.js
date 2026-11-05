const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const scrollTopBtn = document.getElementById('scrollTopBtn');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') menu.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menu.classList.remove('open');
});

window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('show', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
