// src/main.js
import './abrigos.js';
import './menus.js';

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('#app');

    const handleNavigation = (event) => {
        const { page } = event.detail;
        mainContainer.innerHTML = `<${page}></${page}>`;
    };

    const menuComponent = document.querySelector('my-menu');
    if (menuComponent) {
        menuComponent.addEventListener('navigate', handleNavigation);
    }

    // Set the initial view
    mainContainer.innerHTML = '<my-page-abrigos></my-page-abrigos>';
});

