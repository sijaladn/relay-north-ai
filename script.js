const navToggle = document.querySelector(".nav-toggle");
const body = document.body;
const navLinks = document.querySelectorAll(".site-nav a");
const form = document.querySelector("#consultation-form");
const formNote = document.querySelector("#form-note");

const consultationEmail = "relaynorth.ai@gmail.com";

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const subject = "Free AI consultation request";
  const bodyLines = [
    `Name: ${data.get("name") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Interest: ${data.get("interest") || ""}`,
    "",
    "Context:",
    `${data.get("context") || ""}`,
  ];

  const mailto = `mailto:${consultationEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  window.location.href = mailto;

  formNote.textContent =
    "Email draft prepared. If nothing opened, email relaynorth.ai@gmail.com or book at calendly.com/relaynorth-ai.";
});
