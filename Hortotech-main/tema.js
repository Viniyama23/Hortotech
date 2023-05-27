/* const themeButton = document.getElementById("theme-button");
const htmlElement = document.documentElement;

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  htmlElement.classList.add(storedTheme);
}

themeButton.addEventListener("click", function(){
    // document.documentElement.classList.toggle("dark-mode") 
    // Alterna a classe 'dark-mode' na raiz do documento HTML
  htmlElement.classList.toggle("dark-mode");
  
  // Salva a escolha do usuário em localStorage
  if (htmlElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    
  } else {
    localStorage.removeItem("theme");
    document.querySelector('#theme-button').innerHTML = "light-mode"
  }
}); */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-mode'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    //PUXA O NOME ATRAVÉS DO LOCALSTORAGE
    themeButton.innerHTML = `${getCurrentTheme()}`
})

$(document).ready(function(){
  var typed = new Typed(".typing-3", {
  strings: [" o Meio ambiente", "a Vida", "o Futuro", "a Sustentabilidade", "a Inovação"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  
 
});
// Obtém a referência para o elemento do footer
const footerDateElement = document.querySelector('#date');

// Obtém a data atual
const dataAtual = new Date();

// Define o conteúdo do elemento do footer como a data formatada
footerDateElement.textContent = dataAtual.toLocaleDateString();

let tmp;

function tempo(){
    let relogio = document.querySelector('#main')
    let hora = new Date()
    relogio.innerHTML = (hora.toLocaleString()).slice(-11)
}
tmp = setInterval(tempo,100);