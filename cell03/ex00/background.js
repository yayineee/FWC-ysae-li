const btn = document.getElementById("btn")
const Bg = document.body;
btn.addEventListener("click", changeBg);

function changeBg() {
  let color ="#"
  const random = Math.random().toString(16).slice(2,8);
  color+= random;
  Bg.style.backgroundColor=color
}

