/*=========================================
    THEME TOGGLE
=========================================*/

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

/*=========================================
    TYPING EFFECT
=========================================*/

const typingElement = document.getElementById("typing");

const words = [

    "Web Developer",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "JavaScript Expert",
    "Creative Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);

}

typeEffect();

/*=========================================
    SCROLL TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
    NAVBAR BACKGROUND
=========================================*/

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.style.background =
        "rgba(0,0,0,.95)";

    }

    else{

        header.style.background =
        "rgba(0,0,0,.65)";

    }

});