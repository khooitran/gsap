document.addEventListener("DOMContentLoaded", (event) => {
  gsap.timeline()
    .from("h1", { opacity: 0, scale: 0, ease: "back" })
    .from("#squares div", { xPercent: -110, stagger: 0.1, duration: 0.8, ease: "back" }, "<")
});

