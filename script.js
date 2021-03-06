const toggelSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box')
//switch theme dynamically\

function darkMode() {
  change(
    "rgb(0 0 0 / 50%)",
    "rgb(255 255 255 / 50%)",
    "Dark Mode",
    "fa-sun",
    "fa-moon",
    "img/undraw_proud_coder_dark.svg",
    "img/undraw_feeling_proud_dark.svg",
    "img/undraw_conceptual_idea_dark.svg"
  );
 
}
//switch theme  to light mode\

function lightMode() {
  change(
    "rgb(255 255 255 / 50%)",
    "rgb(0 0 0 / 50%)",
    "Light Mode",
    "fa-moon",
    "fa-sun",
    "img/undraw_proud_coder_light.svg",
    "img/undraw_feeling_proud_light.svg",
    "img/undraw_conceptual_idea_light.svg"
  );
  
}

// fucntion to toggle functionality
function change(navC,textC,mode,iconOff,iconOn,img1,img2,img3) {
  nav.style.backgroundColor = navC;
  textBox.style.backgroundColor = textC;
  toggleIcon.children[0].textContent = mode;
  toggleIcon.children[1].classList.replace(iconOff, iconOn);
  
  image1.src = img1;
  image2.src = img2;
  image3.src = img3;
}


function switchTheme(event) {
  
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme','dark')
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme','light');
    lightMode();
  }
}
//event listener
toggelSwitch.addEventListener('change', switchTheme);

//check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggelSwitch.checked = true;
    darkMode();
  } 
}