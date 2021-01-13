const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

function setSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  bodyRef.classList.add(savedTheme);
  checkboxRef.checked = savedTheme === Theme.DARK;
}

function setChangedTheme(oldTheme, newTheme) {
  bodyRef.classList.replace(oldTheme, newTheme);
  localStorage.setItem('theme', newTheme);
}

function checkClass(checkedClass) {
  return bodyRef.classList.contains(checkedClass);
}

function onChangeTherm() {
  if (checkClass(Theme.LIGHT)) {
    setChangedTheme(Theme.LIGHT, Theme.DARK);
  } else {
    setChangedTheme(Theme.DARK, Theme.LIGHT);
  }
}
setSavedTheme();
checkboxRef.addEventListener('change', onChangeTherm);
