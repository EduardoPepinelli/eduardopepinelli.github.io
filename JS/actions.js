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
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let currentIndex = 0;
    const cards = document.querySelectorAll('.carousel-card');
    const cardWidth = cards[0].offsetWidth + 10; 

    function updateCarousel() {
        const offset = -(currentIndex * cardWidth);
        track.style.transform = `translateX(${offset}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if(window.innerWidth > 768) {
            if (currentIndex < cards.length - 4) {
                currentIndex++;
                updateCarousel();
            }
        } else{
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', () => {
        updateCarousel();
    });
});
