// Function to animate circular progress
function animateCircle(canvasId, percentage) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const radius = canvas.width / 2;
    const lineWidth = 8;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const startAngle = -0.5 * Math.PI; // Start from the top of the circle
    let endAngle = startAngle;
    const totalAngle = 2 * Math.PI; // Full circle
    let currentPercentage = 0;
  
    // Set canvas size and style
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#459392';
  
    // Animation function
    function drawFrame() {
      // Clear the canvas for every frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw background circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius - lineWidth / 2, 0, totalAngle);
      ctx.strokeStyle = '#e2e8f0'; // Gray color for background
      ctx.stroke();
  
      // Draw progress circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius - lineWidth / 2, startAngle, endAngle);
      ctx.strokeStyle = '#459392'; // Skill progress color
      ctx.stroke();
  
      if (currentPercentage < percentage) {
        currentPercentage++;
        endAngle = startAngle + (currentPercentage / 100) * totalAngle;
        requestAnimationFrame(drawFrame);
      }
    }
  
    drawFrame(); // Start the animation
  }
  
  // Start the animation on page load or when the section is scrolled into view
  document.addEventListener('DOMContentLoaded', () => {
    animateCircle('python-skill', 90);  // Python: 90%
    animateCircle('html-skill', 80);    // HTML: 80%
    animateCircle('css-skill', 75);     // CSS: 75%
    animateCircle('js-skill', 85);      // JavaScript: 85%
  });
  