// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight active section in nav while scrolling
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Add hover animation on project boxes
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    project.style.transform = "scale(1.03)";
    project.style.transition = "transform 0.3s ease";
  });

  project.addEventListener("mouseleave", () => {
    project.style.transform = "scale(1)";
  });
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
