const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;



function getSavedTheme(){
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    checkboxRef.checked = true;

    bodyRef.classList.add(savedTheme);} else {bodyRef.classList.add(Theme.LIGHT);};
};
function onChangeTherm(){

    if ( bodyRef.classList.contains(Theme.LIGHT)){
      bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
    }
    else { bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
       localStorage.setItem('theme', Theme.LIGHT );
    };


}
getSavedTheme();
checkboxRef.addEventListener('change', onChangeTherm);