const modeSwitchBtn = document.querySelector('[mode-switch]');

modeSwitchBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    modeSwitchBtn.classList.toggle('active');
});