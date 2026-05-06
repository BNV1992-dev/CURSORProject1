const clickBtn = document.getElementById("clickBtn");
let clickCount = 0;
let backgroundIndex = 0;

const backgrounds = [
  "linear-gradient(135deg, #eef2ff 0%, #dbeafe 50%, #f0f9ff 100%)",
  "linear-gradient(135deg, #fee2e2 0%, #fecaca 50%, #fde68a 100%)",
  "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #bae6fd 100%)",
  "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 50%, #fce7f3 100%)"
];

clickBtn.addEventListener("click", () => {
  clickCount += 1;
  const label = clickCount === 1 ? "time" : "times";
  clickBtn.textContent = `Clicked ${clickCount} ${label}`;

  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
  document.body.style.background = backgrounds[backgroundIndex];
});
