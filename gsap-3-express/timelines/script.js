document.addEventListener("DOMContentLoaded", (event) => {
  let tl = gsap.timeline()
    .from("h1", { duration: 10, opacity: 0, scale: 0, ease: "back" })
    .add("test")
    .from("#squares div", { xPercent: -110, stagger: 0.1, duration: 0.8, ease: "back" })

  document.getElementById("play").onclick = () => tl.play();
  document.getElementById("pause").onclick = () => tl.pause();
  document.getElementById("reverse").onclick = () => tl.reverse();
  document.getElementById("restart").onclick = () => tl.restart();
  document.getElementById("skip").onclick = () => tl.play("test");
});

