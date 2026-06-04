document.addEventListener("DOMContentLoaded", (event) => {
  gsap.defaults({ duration: 0.25 })
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const tl = gsap.timeline({ paused: true })
      .to(item.querySelector(".text"), { color: "white", x: 5, scale: 1.3, transformOrigin: "0 50%" })
      .to(item.querySelector(".dot"), { backgroundColor: "#F93", scale: 1.3 }, "<");

    item.addEventListener("mouseenter", () => { tl.play() });
    item.addEventListener("mouseleave", () => { tl.reverse() });
  });


});


