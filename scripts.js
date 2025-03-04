function handleMouseEnter(e) {
  const targetEl = e.target;
  targetEl.classList.add("add-color");
}

const squaresContainer = document.querySelector(".squares-container");
const totalSquares = 144;
const totalMargins = 2 * 13;
const totalBorders = 24;
const stuffSizeTotal = totalBorders + totalMargins;
const sideSize = (500 - stuffSizeTotal) / 12;
const truncSide = sideSize.toFixed(3) - 2;

for (let i = 0; i < totalSquares; i++) {
  const newSqEl = document.createElement("div");
  newSqEl.className = "square";
  newSqEl.style.width = `${truncSide}px`;
  newSqEl.style.height = `${truncSide}px`;
  newSqEl.addEventListener("mouseenter", handleMouseEnter);
  squaresContainer.appendChild(newSqEl);
}
