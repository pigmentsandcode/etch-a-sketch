const squaresContainer = document.querySelector(".squares-container");

function calculateSquareSize(numSide) {
  const totalSquares = numSide ** 2;
  const totalMargins = 2 * (numSide + 1);
  const totalBorders = 2 * numSide;
  const stuffSizeTotal = totalBorders + totalMargins;
  const sideSize = (500 - stuffSizeTotal) / numSide;
  const truncSide = sideSize.toFixed(3) - 2;
  return truncSide;
}

function drawGrid(numSquares) {
  const squareSize = calculateSquareSize(numSquares);
  for (let i = 0; i < numSquares ** 2; i++) {
    const newSqEl = document.createElement("div");
    newSqEl.className = "square";
    newSqEl.style.width = `${squareSize}px`;
    newSqEl.style.height = `${squareSize}px`;
    newSqEl.addEventListener("mouseenter", handleMouseEnter);
    squaresContainer.appendChild(newSqEl);
  }
}

function clearGrid() {
  while (squaresContainer.firstChild) {
    squaresContainer.removeChild(squaresContainer.firstChild);
  }
}

function handleMouseEnter(e) {
  const targetEl = e.target;
  targetEl.classList.add("add-color");
}

function handleChangeSize() {
  const answer = prompt("Enter number of sides for drawing grid (1 to 100):");
  if (answer) {
    const newSize = +answer;
    if (newSize < 1 || newSize > 100) {
      alert("Please enter a number between 1 and 100");
    } else if (!Number.isInteger(newSize)) {
      alert("Please enter an integer between 1 and 100");
    } else {
      clearGrid();
      drawGrid(newSize);
    }
  }
}

const sizeBtnEl = document.querySelector(".size-prompt");
sizeBtnEl.addEventListener("click", handleChangeSize);

drawGrid(16);
