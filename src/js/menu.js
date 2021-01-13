import menuItems from '../menu.json';
import menuTemplate from '../templates/menu.hbs';
const markup = menuTemplate(menuItems);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);