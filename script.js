
const images = [
  './images/bird.avif',
  './images/yoga.jpg',
  './images/fish.avif',
  './images/grass.avif',
  './images/car.jpeg',
  './images/wheel.avif',
  './images/mars.avif',
  './images/green.avif',
  './images/river.avif',
  './images/shiv.jpg'
  ];
const effectBox = document.querySelector(".effect-box");
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};
effectBox.addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    const div = document.createElement("div");
    div.classList.add("img-div");
    div.style.top = dets.clientY - 100 + "px";
    div.style.left = dets.clientX - 70 + "px";
    const img = document.createElement("img")
    const random = String(dets.clientX).split("")[1]
    img.setAttribute('src',images[Number(random)])
    div.append(img)
    effectBox.append(div);
    setTimeout(() => {
      div.remove();
    }, 3000);
  }, 250)
);