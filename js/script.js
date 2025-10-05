// auto typing

var typed= new Typed(".auto-type", {
    strings:['Designer', 'Developer', 'Freelancer'],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

// couting
function animateCounter(selector, end, duration) {
    const el = document.querySelector(selector);
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
        start++;
        el.textContent = start;
        if (start >= end) clearInterval(timer);
    }, stepTime);
}

// Animate members counter to 200 over 2 seconds
animateCounter('.members', 200, 2000);
animateCounter('.projects',345,2000);
animateCounter('.downloads',1800,2000);
animateCounter('.codeLines',1200,2000);