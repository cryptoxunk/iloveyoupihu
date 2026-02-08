const loveText = document.getElementById("loveText");
const loveLanguages = [
  "English — I love you ❤️",
  "Hindi — Main tumse pyaar karta hoon ❤️",
  "Spanish — Te amo ❤️",
  "French — Je t’aime ❤️",
  "Italian — Ti amo ❤️",
  "German — Ich liebe dich ❤️",
  "Portuguese — Eu te amo ❤️",
  "Russian — Ya tebya lyublyu ❤️",
  "Japanese — Aishiteru ❤️",
  "Korean — Saranghae ❤️",
  "Chinese — Wo ai ni ❤️",
  "Arabic — Ana uhibbuki ❤️",
  "Turkish — Seni seviyorum ❤️",
  "Greek — S’agapo ❤️",
  "Dutch — Ik hou van jou ❤️",
  "Polish — Kocham cie ❤️",
  "Swedish — Jag alskar dig ❤️",
  "Norwegian — Jeg elsker deg ❤️",
  "Danish — Jeg elsker dig ❤️",
  "Finnish — Rakastan sinua ❤️",
  "Thai — Chan rak khun ❤️",
  "Vietnamese — Anh yeu em ❤️",
  "Indonesian — Aku cinta kamu ❤️",
  "Malay — Saya cinta awak ❤️",
  "Filipino — Mahal kita ❤️",
  "Hebrew — Ani ohev otach ❤️",
  "Persian — Dooset daram ❤️",
  "Urdu — Main tumse mohabbat karta hoon ❤️",
  "Bengali — Ami tomake bhalobashi ❤️",
  "Punjabi — Main tenu pyar karda ❤️",
  "Gujarati — Hu tane prem karu chu ❤️",
  "Marathi — Mi tuzyavar prem karto ❤️",
  "Tamil — Naan unnai kadhalikkiren ❤️",
  "Telugu — Nenu ninnu premistunnanu ❤️",
  "Kannada — Naanu ninnannu preetisuttiddene ❤️",
  "Malayalam — Njan ninne snehikkunnu ❤️",
  "Odia — Mu tumaku bhalapae ❤️",
  "Nepali — Ma timilai maya garchu ❤️",
  "Sinhala — Mama oyata adarei ❤️",
  "Swahili — Nakupenda ❤️",
  "Zulu — Ngiyakuthanda ❤️",
  "Afrikaans — Ek het jou lief ❤️",
  "Icelandic — Eg elska thig ❤️",
  "Irish — Ta gra agam ort ❤️",
  "Welsh — Rwy’n dy garu di ❤️",
  "Czech — Miluji te ❤️",
  "Hungarian — Szeretlek ❤️",
  "Romanian — Te iubesc ❤️",
  "Serbian — Volim te ❤️",
  "Croatian — Volim te ❤️"
];

let index = 0;

function rotateLove() {

  loveText.style.opacity = 0;

  setTimeout(() => {

    typeText(loveLanguages[index]);
    loveText.style.animation = "none";
    void loveText.offsetWidth; // reset animation
    loveText.style.animation = "loveFade 2s ease forwards";

    index = (index + 1) % loveLanguages.length;

  }, 400);
}

function typeText(text) {

  let i = 0;
  loveText.textContent = "";

  const typing = setInterval(() => {
    loveText.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(typing);
    }
  }, 40);
}

rotateLove();
setInterval(rotateLove, 2500);