const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

let offset = 0; // For animation

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawGrid(spacing = 120, speed = 0.07) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  offset += speed;

const lineColor = ctx.createLinearGradient(0, 0, 0, canvas.height);
lineColor.addColorStop(0, 'rgba(255, 183, 205, 0.3)');  // Top: visible
lineColor.addColorStop(0.7, 'rgba(254, 159, 187, 0.05)'); // Mid: faint
lineColor.addColorStop(1, 'rgba(254, 159, 187, 0)');     // Bottom: invisible

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.shadowColor = 'rgba(255, 156, 186, 0.8)'; // glow color
    ctx.shadowBlur = 8; // intensity of the glow

  for (let x = -spacing + (offset % spacing); x <= canvas.width; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = -spacing + (offset % spacing); y <= canvas.height; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  requestAnimationFrame(() => drawGrid(spacing, speed));
}

window.addEventListener('resize', () => {
  resizeCanvas();
});

resizeCanvas();
drawGrid();
