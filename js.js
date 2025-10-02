//pages links
document.addEventListener("DOMContentLoaded", function(){
    let homeBtn = document.querySelectorAll(".homeBtn");
    let aboutBtn  = document.querySelectorAll(".aboutBtn");
    let academicsBtn = document.querySelectorAll(".academicsBtn");
    let admissionBtn = document.querySelectorAll(".admissionBtn");
    let studentBtn = document.querySelectorAll(".studentBtn");
    let contactBtn = document.querySelectorAll(".contactBtn");

    let links = [
        {btns: homeBtn, file: 'index.html'},
        {btns: aboutBtn, file: 'about.html'},
        {btns: academicsBtn, file: 'academics.html'},
        {btns: admissionBtn, file: 'admission.html'},
        {btns: studentBtn, file: 'studentLife.html'},
        {btns: contactBtn, file: 'contact.html'}
    ];

    links.forEach(({ btns, file}) =>{
        btns.forEach(btn =>{
            btn.addEventListener('click', () =>{
                window.location.href = file;
            });
        });
    });
});

//nav function
window.toggleNavList = function () {
    let sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        sidebar.classList.toggle("show");
    }
};


// let card = document.querySelectorAll(".card");

// document.querySelectorAll(".card .answerBtn").forEach(btn => {
//   btn.addEventListener("click", function(){
//     let card = btn.closest(".card");
//     let answer = card.querySelector(".answer");
//     answer.classList.toggle("show");
//     card.style.backgroundColor = "white";

//   });
// });

document.querySelectorAll(".card .answerBtn").forEach(btn => {
  btn.addEventListener("click", function () {
    let card = btn.closest(".card");
    let answer = card.querySelector(".answer");
    let icon = btn.querySelector("i");

    // Toggle answer visibility
    answer.classList.toggle("show");

    if (answer.classList.contains("show")) {
      card.classList.add("active"); // white background
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      card.classList.remove("active"); // back to grey
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
});



//clients card slider
// document.addEventListener("DOMContentLoaded", function () {
//   let slider = document.querySelector(".slider");
//   let slides = document.querySelectorAll(".client");
//   let slidesPerView = 3;
//   let totalSlides = slides.length;

//   let index = slidesPerView; // start after prepended clones

//   // Clone slides at start and end
//   for (let i = 0; i < slidesPerView; i++) {
//     slider.appendChild(slides[i].cloneNode(true)); // clone first slides to end
//     slider.insertBefore(slides[totalSlides - 1 - i].cloneNode(true), slider.firstChild); // clone last slides to start
//   }

//   let wrapper = document.querySelector(".sliderWrapper");
//   let slideWidth = wrapper.offsetWidth / slidesPerView;

//   function update(animate = true) {
//     slider.style.transition = animate ? "transform 0.5s ease" : "none";
//     slider.style.transform = `translateX(-${index * slideWidth}px)`;
//   }

//   function nextSlide() {
//     index++;
//     update();
//     if (index === totalSlides + slidesPerView) {
//       setTimeout(() => {
//         index = slidesPerView;
//         update(false);
//       }, 500);
//     }
//   }

//   function prevSlide() {
//     index--;
//     update();
//     if (index === 0) {
//       setTimeout(() => {
//         index = totalSlides;
//         update(false);
//       }, 500);
//     }
//   }

//   // Auto slide every 3s
//   let autoSlide = setInterval(nextSlide, 3000);

//   // Pause on hover
//   wrapper.addEventListener("mouseenter", () => clearInterval(autoSlide));
//   wrapper.addEventListener("mouseleave", () => {
//     autoSlide = setInterval(nextSlide, 2000);
//   });

//   // Arrow buttons
//   document.querySelector(".arrow.right").addEventListener("click", nextSlide);
//   document.querySelector(".arrow.left").addEventListener("click", prevSlide);

//   // Initial position
//   update(false);
// });
