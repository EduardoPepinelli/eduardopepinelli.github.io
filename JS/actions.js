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
    const casesSection = document.querySelector(".cases-title");

    if (!aboutSection) return; 

    function scrollToAbout() {
        aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start" 
        });
    }
    function scrollToCases() {
        casesSection.scrollIntoView({
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


    // Ativar a rolagem ao clicar em um botão do menu
    const scrollButton = document.querySelector(".prime-subtitle-link");
    if (scrollButton) {
        scrollButton.addEventListener("click", scrollToAbout);
    }
    const menuButtonAbout = document.querySelector(".about-menu");
    if (menuButtonAbout) {
        menuButtonAbout.addEventListener("click", scrollToAbout);
    }
    const menuButtonCases = document.querySelector(".cases-menu");
    if (menuButtonCases) {
        menuButtonCases.addEventListener("click", scrollToCases);
    }
    const menuButtonContact = document.querySelector(".contato-menu");
    if (menuButtonContact) {
        menuButtonContact.addEventListener("click", scrollToContact);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const cards = document.querySelectorAll('.carousel-card');

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 10; // largura + gap

    function updateCarousel() {
        const offset = -(currentIndex * cardWidth);
        track.style.transform = `translateX(${offset}px)`;
    }

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        } else {
            // reset no desktop
            track.style.transform = "translateX(0)";
            currentIndex = 0;
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
        }
    }

    nextBtn.addEventListener('click', () => {
        if (window.innerWidth <= 768 && currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (window.innerWidth <= 768 && currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', checkScreenSize);

    // checa logo no início
    checkScreenSize();
});
