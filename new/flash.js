document.addEventListener("DOMContentLoaded", function() {
    const getInTouchButton = document.querySelector('.GetInTouch');
    const iconsSection = document.querySelector('.contactme');

    getInTouchButton.addEventListener('click', scrollToIconsSection);

    function scrollToIconsSection() {
        
        const sectionOffsetTop = iconsSection.offsetTop;
        window.scrollTo({
            top: sectionOffsetTop,
            behavior: 'smooth'
        });


        iconsSection.classList.add('flash-background');

       
        setTimeout(() => {
            iconsSection.classList.remove('flash-background');
        }, 1500); 
    }
});