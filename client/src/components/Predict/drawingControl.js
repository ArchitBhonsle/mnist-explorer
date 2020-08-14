let coord = { x: 0, y: 0 };
let paint = false;

function getPosition(event) {
  const canvas = event.target;
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

export function startPainting(event) {
  paint = true;
  getPosition(event);
}

export function stopPainting() {
  paint = false;
}

export function sketch(event, canvas, img) {
  if (!paint) return;

  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.lineWidth = 40;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'white';
  ctx.moveTo(coord.x, coord.y);
  getPosition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
  img.src = canvas.toDataURL('image/png');
}

export function erase(canvas, img) {
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 392, 392);
  img.src = canvas.toDataURL('image/png');
}
