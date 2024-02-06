function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

const offset = 80;
const btnAcademics = document.getElementById('btn-Academics');
const btnSkills = document.getElementById('btn-skill');
const btnAchieve = document.getElementById('btn-Achieve');
const home = document.getElementById('home');

home.addEventListener('click', () => {
    const targetElement = document.getElementById('home-card');
    const targetPos = targetElement.offsetTop - offset;
    window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
    });
});

btnAcademics.addEventListener('click', () => {
    const targetElement = document.getElementById('academics');
    const targetPos = targetElement.offsetTop - offset;
    window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
    });
});

btnSkills.addEventListener('click', () => {
    const targetElement = document.getElementById('skills');
    const targetPos = targetElement.offsetTop - offset;
    window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
    });
});

btnAchieve.addEventListener('click', () => {
    const targetElement = document.getElementById('achieve');
    const targetPos = targetElement.offsetTop - offset;
    window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".header-btns button");
    const cards = document.querySelectorAll(".card-outer, .card-1, .card-2, .card-3");

    function setActiveButton() {
        const scrollPosition = window.scrollY + offset;

        cards.forEach((card, index) => {
            if (scrollPosition >= card.offsetTop && scrollPosition < card.offsetTop + card.offsetHeight) {
                buttons.forEach((btn) => btn.classList.remove("active"));
                buttons[index].classList.add("active");
            }
        });
    }

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    
    window.addEventListener("scroll", setActiveButton);

   
    setActiveButton();
});

