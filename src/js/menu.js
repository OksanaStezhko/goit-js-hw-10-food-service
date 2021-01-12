import menuItems from '../menu.json';
console.log(menuItems);
import menuTemplate from '../templates/menu.hbs';
const markup = menuTemplate(menuItems);
console.log(markup);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);