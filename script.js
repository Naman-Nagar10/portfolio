/* ================= TYPING EFFECT ================= */

const typingText = document.querySelector("#typing-text");

const developerRoles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "JavaScript Developer"
];

let currentRole = 0;
let currentLetter = 0;
let isDeleting = false;


function typeDeveloperRole() {

  if (!typingText) {
    return;
  }


  const role = developerRoles[currentRole];


  if (!isDeleting) {

    typingText.textContent =
      role.substring(0, currentLetter);

    currentLetter++;


    if (currentLetter > role.length) {

      isDeleting = true;

      setTimeout(typeDeveloperRole, 1200);

      return;
    }

  } else {

    typingText.textContent =
      role.substring(0, currentLetter);

    currentLetter--;


    if (currentLetter < 0) {

      currentLetter = 0;

      isDeleting = false;

      currentRole++;

      
      if (currentRole >= developerRoles.length) {
        currentRole = 0;
      }

    }

  }


  const typingSpeed = isDeleting ? 45 : 90;

  setTimeout(typeDeveloperRole, typingSpeed);
}


typeDeveloperRole();



/* ================= MOBILE MENU ================= */

const mobileMenuButton =
  document.querySelector("#mobile-menu-button");

const mobileNavigation =
  document.querySelector("#mobile-navigation");


if (mobileMenuButton && mobileNavigation) {

  mobileMenuButton.addEventListener("click", function () {

    mobileNavigation.classList.toggle("open");


    const menuIsOpen =
      mobileNavigation.classList.contains("open");


    mobileMenuButton.setAttribute(
      "aria-expanded",
      menuIsOpen
    );


    if (menuIsOpen) {

      mobileMenuButton.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    } else {

      mobileMenuButton.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

  });

}



/* ================= CLOSE MOBILE MENU ================= */

const mobileLinks =
  document.querySelectorAll(".mobile-navigation a");


mobileLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    mobileNavigation.classList.remove("open");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      "false"
    );


    mobileMenuButton.innerHTML =
      '<i class="fa-solid fa-bars"></i>';

  });

});



/* ================= DISABLED LINK ================= */

const disabledLinks =
  document.querySelectorAll("[data-disabled-link]");


disabledLinks.forEach(function (link) {

  link.addEventListener("click", function (event) {

    event.preventDefault();

  });

});



/* ================= SCROLL REVEAL ================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    function (entries, observer) {

      entries.forEach(function (entry) {

        if (!entry.isIntersecting) {
          return;
        }


        entry.target.classList.add("show");


        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(function (element) {

  revealObserver.observe(element);

});



/* ================= HEADER SCROLL EFFECT ================= */

const siteHeader =
  document.querySelector("#site-header");


function updateHeader() {

  if (!siteHeader) {
    return;
  }


  if (window.scrollY > 20) {

    siteHeader.classList.add("scrolled");

  } else {

    siteHeader.classList.remove("scrolled");

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  {
    passive: true
  }
);


updateHeader();



/* ================= ACTIVE NAVIGATION ================= */

const pageSections =
  document.querySelectorAll("main section[id]");


const navigationLinks =
  document.querySelectorAll(
    ".navigation-link, .mobile-navigation a"
  );


function updateActiveNavigation() {

  const scrollPosition =
    window.scrollY +
    window.innerHeight * 0.35;


  let activeSection = "home";


  pageSections.forEach(function (section) {

    if (section.offsetTop <= scrollPosition) {

      activeSection = section.id;

    }

  });


  navigationLinks.forEach(function (link) {

    if (link.dataset.section === activeSection) {

      link.classList.add("active");

    } else {

      link.classList.remove("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation,
  {
    passive: true
  }
);


updateActiveNavigation();



/* ================= CURRENT YEAR ================= */

const currentYear =
  document.querySelector("#current-year");


if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}
