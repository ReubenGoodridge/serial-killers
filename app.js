let position = 1

function next() {
  const current = document.getElementById(`panel${position}`);
  position = position + 1
  const next = document.getElementById(`panel${position}`);

  // Move panel1 to the left
  current.style.transform = 'translateX(-100%)';

  // Bring panel2 from the right
  next.style.transform = 'translateX(0)';
}

function prev() {
  const current = document.getElementById(`panel${position}`);
  position = position - 1
  const prev = document.getElementById(`panel${position}`);

  // Move panel1 to the left
  current.style.transform = 'translateX(100%)';

  // Bring panel2 from the right
  prev.style.transform = 'translateX(0)';
}