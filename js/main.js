"use strict";
const navToggle = document.querySelector(".nav-toggle"),
  linksContainer = document.querySelector(".links-container"),
  links = document.querySelector(".links"),
  scrollLinks = Array.from(document.querySelectorAll(".scroll-link")),
  linksColor = document.querySelectorAll(".links a"),
  date = document.querySelector("#date"),
  home = document.querySelector("#home"),
  navbar = document.querySelector("nav"),
  about = document.querySelector("#about"),
  topLink = document.querySelector(".btn-up");

date.innerHTML = new Date().getFullYear();
navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height,
    containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight == 0) {
    linksContainer.style.cssText = `height:${linksHeight}px !important`;
  } else {
    linksContainer.style.cssText = "height:0 !important";
  }
});

window.addEventListener("scroll", function () {
  const scrollHight = window.pageYOffset,
    navbarHight = navbar.getBoundingClientRect().height,
    aboutHight = about.getBoundingClientRect().height;
  if (scrollHight > aboutHight - navbarHight) {
    navbar.classList.add("nav-color");
    navbar.classList.add("shadow");

    linksColor.forEach((link) => {
      link.style.cssText = "color : #000 !important";
      topLink.style.opacity = 1;
    });
  } else {
    topLink.style.opacity = 0;
    navbar.classList.remove("shadow");

    navbar.classList.remove("nav-color");

    linksColor.forEach((link) => {
      link.style.color = "#fff";
    });
  }
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1),
      element = document.getElementById(id),
      navbarHight = navbar.getBoundingClientRect().height,
      containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navbarHight;
    if (navbarHight > 83) {
      position += containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    linksContainer.style.height = 0;
  });
});
topLink.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
