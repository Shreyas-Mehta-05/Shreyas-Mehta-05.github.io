// JavaScript to toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    const achieveImg = document.body.querySelector('.achieve-img');
    const profileImg = document.body.querySelector('.profile-img');
    if (document.body.classList.contains('dark-mode')) {
        profileImg.src = 'new-modified.jpeg'; 
        achieveImg.src = 'Achieve-dark.jpeg'; 
        profileImg.style="border:2px solid black; backdrop-filter: blur(10px);"
    } else {
        profileImg.src = 'new.jpeg'; 
        achieveImg.src = 'Achieve.jpeg'; 
        profileImg.style="border:2px solid white; backdrop-filter: blur(0px);"
    }
};



const darkModeToggleBtn = document.getElementById('dark-mode-toggle-btn');
darkModeToggleBtn.addEventListener('click', toggleDarkMode);
