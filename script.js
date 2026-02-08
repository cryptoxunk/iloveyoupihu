const burst = document.getElementById("heartBurst");

function burstHearts() {
    document.body.classList.add("blush");
    setTimeout(() => {
        document.body.classList.remove("blush");
    }, 3000);

    const emojis = ["💖", "❤️‍🔥", "💕", "💋", "✨", "🫶", "🎀"]

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";

        heart.style.fontSize = (16 + Math.random() * 32) + "px";

        burst.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function shakeButton(ghostBtn) {
    const messages = ["Take your time… :)",
        "Smile first, madam.", 
        "I’ll wait for that smile...",
        "You have 3 seconds to smile",
        "No smile = No access..",
        "Has do kuchupuchu :)",
        "Good girls do smile ;)",
        "That smile is required ahead…",
        "Error 1402: Smile not detected",
        "That smile is required ahead…",
        "Asking for the last time 😤",
        "Smiling is not that hard..."
        ]

    ghostBtn.classList.add("shake");
    setTimeout(() => {
            ghostBtn.classList.remove("shake");
    }, 500);

    ghostBtn.innerText = messages[Math.floor(Math.random() * messages.length)]
}

function navigateToRoseDay() {
    document.body.classList.add("page-exit");
    setTimeout(() => {
        document.body.classList.remove("page-exit");
        window.location.href = "rose.html";
    }, 900);
}

function navigateToAuth() {
    document.body.classList.add("page-exit");
    setTimeout(() => {
        document.body.classList.remove("page-exit");
        window.location.href = "login.html";
    }, 900);
}
let hoverCount = 0;
let alreadyYes = false;

function shakeNoButton(button) {
    const messages = ["You are not allowed to that!!",
        "Please, baby? 🥺",
        "Please please please...",
        "Wait wait 😳",
        "This is too fast…",
        "I refuse 😌",
        "This is illegal",
        "Try again :(",
        "This is not funny :(",
        "Is there someone else? 🥺"
        ]

    button.classList.add("shake");
    setTimeout(() => {
            button.classList.remove("shake");
    }, 500);

    button.innerText = messages[Math.floor(Math.random() * messages.length)]
}

function noButtonHoverAction(button) {
    if (!alreadyYes) {
        hoverCount++;
        if (hoverCount === 15) {
            button.innerText = "Yes 💖";
            button.disabled = false;
            alreadyYes = true;
            return;
        }
        shakeNoButton(button);
        moveButtonRandomly(button);
    }
}

function moveButtonRandomly(button) {

    if (!button.classList.contains("move-button")) {
        button.classList.add("move-button");
    }

    const btnRect = button.getBoundingClientRect();

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const boxWidth = 750;
    const boxHeight = 400;

    const boxLeft = (window.innerWidth - boxWidth) / 2;
    const boxTop = (window.innerHeight - boxHeight) / 2;

    const boxRight = boxLeft + boxWidth;
    const boxBottom = boxTop + boxHeight;


    let randomX, randomY;
    let insideForbidden = true;


    while (insideForbidden) {

        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;

        const btnCenterX = randomX + btnRect.width / 2;
        const btnCenterY = randomY + btnRect.height / 2;

        insideForbidden =
            btnCenterX > boxLeft &&
            btnCenterX < boxRight &&
            btnCenterY > boxTop &&
            btnCenterY < boxBottom;
    }

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

let password = "";
let name = "";
let passwordInput;
let invalidCount = 0

const validNames = ["pihu", "kuchu puchu", "kuchupuchu", "baby", "babe", "babu", "cutie", "rasmalai", "darling"];
const validPasswords = ["iloveyou", "mlovesp", "plovesm", "1402", "pihulovesmanav", "manavlovespihu", "ilovepihu", "iloveyoupihu", "manav"];

function validatePassword(input) {
    passwordInput = input;
    password = input.value;

    if (password === "iloveyou") {
        const heading = document.querySelector("h1");
        heading.innerText = "I love you too...";
    }
}

function validateName(input) {
    name = input.value;
    if (!validNames.includes(input.value)) {
        input.value = input.value + " ❌"
        input.classList.add("invalid");
        input.classList.remove("valid");
        input.classList.add("shake");
        setTimeout(() => {
                input.classList.remove("shake");
        }, 500);
    } else {
        input.value = input.value + " 🫶"
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
}

function submitForm() {
    if (!validPasswords.includes(password)) {
        passwordInput.classList.add("invalid");
        passwordInput.classList.add("shake");
        setTimeout(() => {
                passwordInput.classList.remove("shake");
        }, 500);
        invalidCount++;
    } else if (!validNames.includes(name)) {
        passwordInput.classList.add("invalid");
        passwordInput.classList.add("shake");
        setTimeout(() => {
                passwordInput.classList.remove("shake");
        }, 500);
        invalidCount++;
    } else {
        invalidCount = 0;
        window.location.href = "propose.html";
    }

    if (invalidCount === 3) {
        const heading = document.querySelector("h1");
        heading.innerText = "Need hint? Check bottom left cutie!!"
    }

    if (invalidCount === 4) {
        const heading = document.querySelector("h1");
        heading.innerText = "Hint: Our spotify password?"
    }

    if (invalidCount === 5) {
        const heading = document.querySelector("h1");
        heading.innerText = "👀❤️🫵"
    }

    if (invalidCount === 6) {
        const heading = document.querySelector("h1");
        heading.innerText = "Who loves you the most?"
    }
}