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



//Q&A 
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


//back to top 

let backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () =>{
  if(window.scrollY > 400){
    backToTop.classList.add("show");
  }else{
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener('click', () =>{
  window.scrollTo({top: 0, behavior: "smooth"});
});
