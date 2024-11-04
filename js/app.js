/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

document.addEventListener("DOMContentLoaded", () => {
  // Global variables
  const navList = document.getElementById("nav__list");
  const sections = document.querySelectorAll("section");

  // Helper functions
  const isInViewport = (section) => {
    const rect = section.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  };

  const createNavItem = (section) => {
    const navItem = document.createElement("li");
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link"></a>`
    navItem.querySelector("a").textContent = section.getAttribute("data-nav");
    return navItem;
  }

  // Main functions
  // Dynamic navigation menu
  sections.forEach((section) => {
    const navItem = createNavItem(section);
    navList.appendChild(navItem);
  });

  // Add class 'active' to section when near top of viewport
  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("your-active-class"); // Updated class name
      } else {
        section.classList.remove("your-active-class"); // Updated class name
      }
    });
  });

  // Scroll to anchor ID using scrollTO event
  navList.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href").slice(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
})