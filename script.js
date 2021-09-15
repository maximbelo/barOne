"use strict";

// Create a function to toggle the hamburger menu and display the list items.
//    - Select -> .hamburgerMenu, .navbarLinks and all the .navbarLinks li using querySelectors and store them all in variables.
//    - Add an event listner to listen for a click on the .hamburgerMenu.
//    - On click, make .navbarLink appear on the page.

const navSlider = () => {
  const burger = document.querySelector(".hamburgerMenu");
  const nav = document.querySelector(".navbarLinks");
  const navLinks = document.querySelectorAll(".navbarLinks li");

  burger.addEventListener("click", () => {
    // Toggle nav menu
    nav.classList.toggle("navActive");

    // Animate links
    //    - Use a forEach() method with two params to execute animation for each <li> item.
    //    - Dividing the index num gives us a delay between each <li> item in the array and adding some time to that gives us an initial delay when opening the menu.
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger animation
    burger.classList.toggle("animate");
  });
};

navSlider();
