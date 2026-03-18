const yesBtn = document.getElementById("yes");
const maybeBtn = document.getElementById("maybe");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");

// 😈 Move NO button (SMALL RANGE FIX)
function moveNoButton() {
  const range = 300; // 🔥 control how far it can move

  const currentX = noBtn.offsetLeft;
  const currentY = noBtn.offsetTop;

  let newX = currentX + (Math.random() * range - range / 2);
  let newY = currentY + (Math.random() * range - range / 2);

  // 🛑 Keep inside screen
  newX = Math.max(0, Math.min(window.innerWidth - 100, newX));
  newY = Math.max(0, Math.min(window.innerHeight - 50, newY));

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}

// 💻 Desktop support
noBtn.addEventListener("mouseover", moveNoButton);

// 📱 Mobile support
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// 🔄 Reset NO button
function resetNoButton() {
  noBtn.style.left = "calc(50% + 110px)";
  noBtn.style.top = "50%";
}

// 💖 Floating hearts
function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

// ✅ YES → Hug
yesBtn.onclick = () => {
  result.innerHTML = `
    <img src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif" width="200"><br>
    🤗 Sending you a BIG HUG! 💖
  `;
  createHearts();
  resetNoButton();
};

// 🤔 MAYBE → Sad cat + chocolate
maybeBtn.onclick = () => {
  result.innerHTML = `
    <img src="https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif" width="200"><br>
    🐱 Feeling a little sad...<br>
    🍫 Maybe is better than 'No' 😄<br>
    Take this chocolate ❤️
  `;
  resetNoButton();
};

// ❌ NO fallback (if somehow clicked)
noBtn.onclick = () => {
  moveNoButton();
};
