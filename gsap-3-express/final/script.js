let tl = gsap.timeline();

function init() {
  tl.from(".hero-section", { autoAlpha: 0 })
    .from(
      ".text",
      {
        duration: 1,
        xPercent: 136,
        stagger: 0.36,
        ease: "power4",
      },
    );

  GSDevTools.create();
}

document.addEventListener("DOMContentLoaded", (event) => {
  init();
});


