let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.getElementById("navbar"); // Assuming your navbar has an ID

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
    if (navLink.getAttribute("href").slice(1) === currentSection) {
      navLink.classList.add("active");
    }
  });
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#1f242d"; // Change to your desired color
  } else {
    header.style.backgroundColor = "#000"; // Change to the default color when not scrolled
  }
});
