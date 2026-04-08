// ======================= script.js ======================= 

// Initialize AOS Animation
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: false
    });
}

// Typing Animation
const texts = [
     "Frontend Developer", 
     "Creative Coder", 
     "JavaScript Lover" 
];

let currentIndex = 0; 
let charIndex = 0; 
let isDeleting = false;
let typeSpeed = 100;
let deleteSpeed = 50;
let delayBetweenWords = 1500;

function type() { 
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;
    
    const currentText = texts[currentIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    typingElement.textContent = currentText.substring(0, charIndex);
    
    let speed = isDeleting ? deleteSpeed : typeSpeed;
    
    if (!isDeleting && charIndex === currentText.length) {
        speed = delayBetweenWords;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        speed = typeSpeed;
    }
    
    setTimeout(type, speed);
}

type();

// Smooth Scroll 
function scrollToProjects() { 
    document.getElementById("projects") 
    .scrollIntoView({ behavior: "smooth" }); 
}

// Open Links 
function openLink(url) { 
    window.open(url, "_blank"); 
}