document.addEventListener("DOMContentLoaded", function () {
/*carregamento custom de texto */
    const texto = "< Bem vindo ao meu portfolio />";
    let index = 0;
    const elemento = document.querySelector(".prime-title");
    const subtitle = document.querySelector(".prime-subtitle"); 

    function digitar() {    
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(digitar, 100);
        } else {

            setTimeout(() => {
                subtitle.style.opacity = "1";
            }, 500); 
        }
    }

window.addEventListener("load", digitar);

/* botões */

    const aboutSection = document.querySelector(".mainContent");
    const contactSection = document.querySelector(".contato");
    const projectsSection = document.querySelector(".project-title");

    if (!aboutSection) return; 

    function scrollToAbout() {
        aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start" 
        });
    }
    function scrollToContact() {
        contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start" 
        });
    }
    function scrollToProjects() {
        projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // Ativar a rolagem ao clicar em um botão do menu
    const scrollButton = document.querySelector(".prime-subtitle-link");
    if (scrollButton) {
        scrollButton.addEventListener("click", scrollToAbout);
    }
    const menuButtonAbout = document.querySelector(".about-menu");
    if (menuButtonAbout) {
        menuButtonAbout.addEventListener("click", scrollToAbout);
    }
    const menuButtonContact = document.querySelector(".contato-menu");
    if (menuButtonContact) {
        menuButtonContact.addEventListener("click", scrollToContact);
    }
    const menuButtonProject = document.querySelector(".projects-menu");
    if (menuButtonProject) {
        menuButtonProject.addEventListener("click", scrollToProjects);
    }
});
