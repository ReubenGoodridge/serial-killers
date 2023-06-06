document.getElementById("begin").onclick = function () { 
  const panel1 = document.getElementById('panel1');
  const panel2 = document.getElementById('panel2');

  // Move panel1 to the left
  panel1.style.transform = 'translateX(-100%)';

  // Bring panel2 from the right
  panel2.style.transform = 'translateX(0)';

  // Update the browser history state
  const state = { panel: 'panel2' };
  history.pushState(state, '', '');
}

// Listen for the popstate event (triggered by the back button)
window.addEventListener('popstate', function(event) {
  const panel1 = document.getElementById('panel1');
  const panel2 = document.getElementById('panel2');

  if (event.state && event.state.panel === 'panel2') {
    // Reverse the swipe: move panel2 to the right, bring panel1 from the left
    panel1.style.transform = 'translateX(0)';
    panel2.style.transform = 'translateX(100%)';
  }
});