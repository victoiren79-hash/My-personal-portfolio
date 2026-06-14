// ===== HAMBURGER MENU (for small mobile) =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("div[id]");
const navAnchors = document.querySelectorAll(".links a");

function updateActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navAnchors.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });

// ===== SKILL CARD → SCROLL TO PROJECTS =====
document.querySelectorAll(".wedDev[data-target]").forEach((card) => {
  card.addEventListener("click", () => {
    const targetId = card.getAttribute("data-target");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

      // Flash highlight effect so the user sees which section they landed on
      targetEl.style.transition = "background 0.3s ease";
      targetEl.style.background = "rgba(255, 0, 0, 0.08)";
      setTimeout(() => {
        targetEl.style.background = "";
      }, 1200);
    }
  });
});

// ===== PREVENT PLACEHOLDER LINK JUMP =====
// Project cards with href="#" won't jump to top
document.querySelectorAll('.projCard[href="#"]').forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    // Replace this with: window.open('your-project-url', '_blank');
    alert("Replace the href=\"#\" with your actual project link!");
  });
});

// ===== CONTACT FORM =====
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email")?.value;
    const subject = document.getElementById("subject")?.value;
    const msg = document.getElementById("msg")?.value;

    if (!email || !subject || !msg) {
      alert("Please fill in all fields.");
      return;
    }

    // Replace with your actual form submission logic (e.g., EmailJS, API call)
    alert("Message sent! (Connect a backend to actually send it)");
    form.reset();
  });
}