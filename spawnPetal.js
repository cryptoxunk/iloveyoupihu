const container = document.getElementById("petalContainer");
const petals = ["image-petal", "petal"]
let started = false;

function createPetal() {

  const petal = document.createElement("div");
  petal.classList.add(petals[Math.round(Math.random())]);

  petal.style.left = Math.random() * 100 + "vw";

  const size = 32 + Math.random() * 12;
  petal.style.width = size + "px";
  petal.style.height = size + "px";

  const duration = 6 + Math.random() * 6;
  petal.style.animationDuration = duration + "s";

  petal.style.transform =
    `translateX(${Math.random() * 40 - 20}px)`;

  container.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

function startPetalShower() {
    if (!started) {
        setInterval(createPetal, 300);
        started = true;
    }
}

function navigateToLove() {
    setInterval(createPetal, 10);
    setTimeout(() => {
        document.body.classList.add("page-exit");
        setTimeout(() => {
            document.body.classList.remove("page-exit");
            window.location.href = "love.html";
        }, 900);
    }, 5000);
}

