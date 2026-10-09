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

// Slider arrows (services, portfolio, reviews)
document.querySelectorAll("[data-slider]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const slider = document.getElementById(btn.dataset.slider + "-slider");
    if (!slider || !slider.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
    const step = slider.firstElementChild.getBoundingClientRect().width + gap;
    slider.scrollBy({ left: step * Number(btn.dataset.dir), behavior: "smooth" });
  });
});

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
