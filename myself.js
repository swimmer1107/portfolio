document.addEventListener("DOMContentLoaded", () => {
  // Home alert on nav click
  const homeLink = document.querySelector('a[href="index.html"]');
  if (homeLink) {
    homeLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent navigation
      alert("You are on the Home page.");
    });
  }

  // Section toggling
  const buttons = document.querySelectorAll(".fancy-btn[data-target]");
  const sections = document.querySelectorAll(".info-section, .projects-section");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-target");

      // Hide all sections
      sections.forEach((section) => section.classList.add("hidden"));

      // Show the targeted section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
        targetSection.classList.add("fade-in");
      }
    });
  });

  // About fade-in from left
  const aboutBox = document.querySelector(".about-box");
  if (aboutBox) {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-left");
          aboutObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    aboutObserver.observe(aboutBox);
  }

  // General fade-in observer
  const generalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        generalObserver.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.info-section, .project-card').forEach((section) => {
    generalObserver.observe(section);
  });

  // Heading animations
  const introHeading = document.querySelector(".intro-heading");
  const nameHeading = document.querySelector(".main-name");
  if (introHeading) introHeading.classList.add("animate-entry");
  if (nameHeading) {
    setTimeout(() => {
      nameHeading.classList.add("animate-entry");
    }, 300);
  }

  // Modal handling
  const modal = document.getElementById("contactModal");
  const openBtns = document.querySelectorAll(".fancy-btn[href='#']");
  const closeBtn = document.querySelector(".close-btn");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Contact form validation & submission
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const mobile = form.mobile.value.trim();

      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      const mobileRegex = /^[0-9]{10}$/;

      let errorMsg = "";

      if (!name) errorMsg += "• Name is required.\n";
      if (!emailRegex.test(email)) errorMsg += "• Please enter a valid email.\n";
      if (!mobileRegex.test(mobile)) errorMsg += "• Please enter a valid 10-digit mobile number.\n";

      if (errorMsg) {
        e.preventDefault();
        alert("Please fix the following:\n\n" + errorMsg);
      } else {
        alert("Thank you for contacting me! Your message has been received.");
        modal.classList.add("hidden");
        form.reset();
      }
    });
  }

  // Email field live validation
  const emailInput = document.querySelector('input[name="email"]');
  if (emailInput) {
    emailInput.addEventListener("input", function () {
      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      this.style.borderColor = pattern.test(this.value) ? "green" : "red";
    });
  }

  // Mobile field validation
  const mobileInput = document.querySelector('input[name="mobile"]');
  if (mobileInput) {
    mobileInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });
  }

  // Loader hide after page load
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Typed effect
  if (window.Typed) {
    new Typed(".main-name", {
      strings: ["PULKIT KULSHRESHTHA"],
      typeSpeed: 80,
      showCursor: false,
    });
  }
});

// Handle "VIEW PROJECTS" button inside About section
const viewProjectsBtn = document.getElementById("viewProjectsBtn");
const projectsSection = document.getElementById("projects");

if (viewProjectsBtn && projectsSection) {
  viewProjectsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Hide other sections
    const allSections = document.querySelectorAll(".info-section, .projects-section");
    allSections.forEach((section) => section.classList.add("hidden"));

    // Show and scroll to the Projects section
    projectsSection.classList.remove("hidden");
    projectsSection.classList.add("fade-in");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });
}

