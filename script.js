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
    const messages = ["Take your time… :)", "Smile first, madam.", "I’ll wait for that smile...", "You have 3 seconds to smile", "No smile = No access..", "Has do kuchupuchu :)"]

    ghostBtn.classList.add("shake", "show-msg");
    setTimeout(() => {
            ghostBtn.classList.remove("shake");
    }, 500);

    const innerText = ghostBtn.innerText;

    ghostBtn.innerText = messages[Math.floor(Math.random() * messages.length)]
    setTimeout(() => {
        ghostBtn.innerText = innerText;
    }, 1000);
  
}
