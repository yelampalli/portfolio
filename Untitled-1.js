const words = [
    "Computer Science Student",
    "Web Developer",
    "Java Developer",
    "Machine Learning Enthusiast",
    "AI Enthusiast",
    "Python Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;
            setTimeout(typeEffect,1500);
            return;
        }

    }else{

        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if(charIndex === 0){

            isDeleting = false;
            wordIndex++;

            if(wordIndex === words.length){
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);

}

typeEffect();