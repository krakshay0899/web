'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// dynamic title text rotation
const titleElement = document.querySelector(".title");
const titleTexts = [
  "Ph.D Scholar",
  "Researcher",
  "Traveller",
  "Innovator"
];
let titleIndex = 0;

const rotateTitle = function () {
  if (titleElement) {
    titleElement.textContent = titleTexts[titleIndex];
    titleIndex = (titleIndex + 1) % titleTexts.length;
  }
};

setInterval(rotateTitle, 2000);

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    // First, remove the 'active' class from all links and pages
    for (let j = 0; j < navigationLinks.length; j++) {
      navigationLinks[j].classList.remove("active");
      pages[j].classList.remove("active");
    }

    // Then, add the 'active' class to the clicked link and the corresponding page
    const targetPage = this.textContent.trim().toLowerCase();
    this.classList.add("active");

    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      }
    }

  });
}
