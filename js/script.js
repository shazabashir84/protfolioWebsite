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
// 
// 
// carousel section using swiper js
 new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});
// end carousel
// 
// 
// ---------------------------------------
// section four filter images by class
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filterValue = button.dataset.filter;
    console.log("filterValue:", filterValue)

    galleryItems.forEach((item) => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
