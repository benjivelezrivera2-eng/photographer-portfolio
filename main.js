import { inject } from "@vercel/analytics";

inject();

// Tiny, dependency-free interactions.

// Mobile menu toggle
(function () {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

// Active nav link while scrolling
(function () {
  const links = Array.from(document.querySelectorAll(".nav__menu a"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => io.observe(s));
})();

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Booking note: a short form that starts an email to the studio.
(function () {
  const note = document.getElementById("book-note");
  const form = document.getElementById("book-form");
  if (!note || !form || typeof note.showModal !== "function") return;

  document.querySelectorAll("[data-book]").forEach((button) => {
    button.addEventListener("click", () => note.showModal());
  });

  note.querySelector("[data-close]").addEventListener("click", () => note.close());

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Kind of session: ${data.get("kind")}`,
      `Date: ${data.get("date")}`,
    ].join("\n");
    const mail = `mailto:hello@maraellis.studio?subject=${encodeURIComponent("Session request")}&body=${encodeURIComponent(body)}`;
    form.reset();
    note.close();
    window.location.href = mail;
  });
})();
