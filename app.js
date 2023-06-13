let position = 1
let docState = 1

function next() {
  const current = document.getElementById(`panel${position}`);
  console.log(position += 1)
  const next = document.getElementById(`panel${position}`);
  // Move panel1 to the left
  current.style.transform = 'translateX(-100%)';

  // Bring panel2 from the right
  next.style.transform = 'translateX(0)';
  
  // Trigger timeline animation if on panel2
  const timeline = document.getElementById('timeline');
  if(position === 6) {
    timeline.classList.add('timeline-animation');
  }
  // Trigger the corner animation & quote type if on panel4
  const diamorphine = document.getElementById('diamorphine');
  const type = document.getElementById('type');
  const buttons = document.getElementById('buttons');
  if(position === 4) {
    diamorphine.classList.add('rightCorner');
    type.classList.add('fade');
    buttons.classList.add('fade');
  }
}

function prev() {
  const current = document.getElementById(`panel${position}`);
  console.log(position -= 1)
  const prev = document.getElementById(`panel${position}`);

  // Move panel1 to the left
  current.style.transform = 'translateX(100%)';

  // Bring panel2 from the right
  prev.style.transform = 'translateX(0)';
}

function portrait() {
  const doc = document.getElementById('document')
  const portrait = document.getElementById('portrait')
  const next = document.getElementById('next')
  if (docState === 1) {
    doc.style.transform = 'translateX(-120%)'
    portrait.style.transform = 'translateY(-0%)'
    docState = 2
    next.classList.add('fade');
  } else {
    doc.style.transform = 'translateX(-50%)'
    portrait.style.transform = 'translateY(110%)'
    docState = 1
  }
}