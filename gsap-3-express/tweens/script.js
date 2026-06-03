document.addEventListener("DOMContentLoaded", (event) => {
  // gsap.fromTo(
  //   ".square",
  //   { x: 700, y: 400, opacity: 0 },
  //   { x: 400, y: 200, scale: 3, opacity: 1, duration: 3 }
  // );

  // gsap.to(".green", { duration: 3, x: 600, ease: "back", repeat: -1, yoyo: true })
  // gsap.to(".pink", { duration: 3, x: 600, ease: "linear" })

  let tween = gsap.to(
    ".green",
    { duration: 3, x: 600, ease: "linear", paused: true }
  );

  document.getElementById("play").onclick = () => tween.play();
  document.getElementById("pause").onclick = () => tween.pause();
  document.getElementById("reverse").onclick = () => tween.reverse();
  document.getElementById("restart").onclick = () => tween.restart();
});

