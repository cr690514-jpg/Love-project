const yesBtn = document.getElementById("yes");
const maybeBtn = document.getElementById("maybe");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");

// 🧠 STORE ORIGINAL POSITION
let originalLeft = noBtn.offsetLeft;
let originalTop = noBtn.offsetTop;

// YES CLICK → HUG + RESET NO BUTTON
yesBtn.onclick = () => {
  result.innerHTML = `
    <img src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif" width="200"><br>
    🤗 Awwwww... Sending you a BIG HUG! 💖
  `;
  createHearts();
  resetNoButton();
};

// MAYBE CLICK → SAD CAT + CHOCOLATE
maybeBtn.onclick = () => {
  result.innerHTML = `
    <img src="https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif" width="200"><br>
    🐱 Feeling a little sad... <br>
    ❤️ But, Maybe is better than 'No' 😄 <br>
    Take this chocolate 🍫
  `;
  
  resetNoButton();
};

// NO BUTTON ESCAPE 😈
noBtn.onmouseover = () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}
// 💻 Laptop (mouse hover)
noBtn.addEventListener("mouseover", moveNoButton);

// 📱 Mobile (touch)
noBtn.addEventListener("touchstart", moveNoButton);

// 🔄 RESET FUNCTION
function resetNoButton() {
  noBtn.style.left = originalLeft + "px";
  noBtn.style.top = originalTop + "px";
}

// 💖 FLOATING HEARTS
function createHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}
