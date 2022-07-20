const dots =document.querySelectorAll(".tab-item");
const slides =document.querySelectorAll(".slide-users");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const numberOfSilides = slides.length;
var slideNumber = 0;
var slideIndex = 0;
var taskbar = document.querySelector(".options");
const skillsSection = document.querySelector(".skills-section");
const progressBars =document.querySelectorAll(".container-skills-progress-bar");

const optionElements =document.querySelectorAll(".option-item");
const extendElements =document.querySelectorAll(".extend");
// console.error("Đàm Đình Nam");

optionElements.forEach((option, index) => {
  const extendElement = extendElements[index];
  option.onclick = function () {
    clickTop();

    document.querySelector(".option-item.active").classList.remove("active");
    document.querySelector(".extend.active").classList.remove("active");

    this.classList.add("active");
    extendElement.classList.add("active");
  };
});

function clickTop() {
  document.documentElement.scrollTop = 0;
}

// Skill
function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
    progressBar.style.transition = "all 0.4s linear";
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
    p.style.transition = "all 0.2s linear";
  });
}

window.addEventListener("scroll", () => {
  const sectionPositon = skillsSection.getBoundingClientRect().top;
  const screenPositon = window.innerHeight;

  if (sectionPositon < screenPositon) {
    showProgress();
  } else {
    hideProgress();
  }
});

window.onscroll = function () {
  if (
    document.documentElement.scrollTop > 300 ||
    document.body.scrollTop > 300
  ) {
    taskbar.style.position = "fixed";
    taskbar.style.top = 0;
    taskbar.style.width = "163.32px";
    taskbar.style.marginTop = "30px";
    taskbar.style.transition = "all 0.2s linear";
  } else {
    taskbar.style.position = "static";
    taskbar.style.marginTop = 0;
    taskbar.style.transition = "all 0.2s linear";
  }
};

//Ấn vào nút để thay đổi đối tượng slide
dots.forEach((dot, index) => {
  const slide = slides[index];

  dot.onclick = function () {
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".slide-users.active").classList.remove("active");

    this.classList.add("active");
    slide.classList.add("active");
  };
});
//Next slide
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > numberOfSilides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  dots[slideNumber].classList.add("active");
});
//Lùi slide
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSilides - 1;
  }

  slides[slideNumber].classList.add("active");
  dots[slideNumber].classList.add("active");
});

//Slide autoplay
var playSlide;

var repeater = () => {
  playSlide = setInterval(() => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSilides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    dots[slideNumber].classList.add("active");
  }, 5000);
};

repeater();
