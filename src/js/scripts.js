document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".row section");
    const icons = document.querySelectorAll(".row section .icon");
    const images = document.querySelectorAll(".row .section-img");

    function checkScroll() {
        let triggerBottom = window.innerHeight * 0.85; // Define um ponto de ativação

        sections.forEach((section, index) => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                icons[index].style.transform = "scale(1)";
                images[index].style.opacity = "1";
                images[index].style.transform = "translateY(0)";
            }
        });
    }

    // Aplica estilos iniciais para os elementos (antes de serem exibidos)
    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 1s ease-out, transform 1.2s ease-out";
    });

    icons.forEach((icon) => {
        icon.style.transform = "scale(0.5)";
        icon.style.transition = "transform 1.2s ease-out";
    });

    images.forEach((image) => {
        image.style.opacity = "0";
        image.style.transform = "translateY(50px)";
        image.style.transition = "opacity 1s ease-out, transform 1.5s ease-out"; // Mais devagar que os textos
    });

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});


function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}