document.getElementById('rainbow-text').addEventListener('mousemove', function (e) {
  const target = e.target;
  const boundingRect = target.getBoundingClientRect();
  const xPosition = (e.clientX - boundingRect.left) / boundingRect.width * 100;
  const yPosition = (e.clientY - boundingRect.top) / boundingRect.height * 100;
  const gradientOverlay = document.getElementById('gradient-overlay');
  gradientOverlay.style.backgroundImage = `radial-gradient(circle at ${xPosition}% ${yPosition}%, rgba(0,0,0,0), rgba(0,0,0,0.2))`;
  gradientOverlay.style.opacity = 1;
  console.log("TEST");
});

document.getElementById('rainbow-text').addEventListener('mouseleave', function () {
  const gradientOverlay = document.getElementById('gradient-overlay');
  gradientOverlay.style.opacity = 0;
});
