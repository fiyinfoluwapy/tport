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


//mobile view and project 


// // Mobile menu toggle
// document.getElementById('mobile-menu-button').addEventListener('click', function () {
//   const mobileMenu = document.getElementById('mobile-menu');
//   mobileMenu.classList.toggle('hidden'); // Toggle the visibility of the mobile menu
// });

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');

  // Toggle the visibility of the mobile menu
  mobileMenu.classList.toggle('hidden');

  // Toggle the rotation of the button icon
  menuIcon.classList.toggle('rotate-up');
});

// JavaScript for typewriter effect and toggling the collapsible content

// JavaScript for typewriter effect and toggling the collapsible content

// Typewriter effect text
const introText = "@teedire_9: Crafting exceptional digital experiences.";
let index = 0;
let typewriterStarted = false; // To ensure the effect runs only once

// Typewriter function
function typeWriter() {
  if (index < introText.length) {
    document.getElementById('intro').innerHTML += introText.charAt(index);
    index++;
    setTimeout(typeWriter, 300); 
  }
}

// Trigger typewriter effect on scroll-to-view (IntersectionObserver)
const aboutSection = document.getElementById('about');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !typewriterStarted) {
      typewriterStarted = true;
      typeWriter();
    }
  });
});
observer.observe(aboutSection);

// Trigger typewriter effect on link click
document.querySelectorAll('a[href="#about"]').forEach(link => {
  link.addEventListener('click', function () {
    const intro = document.getElementById('intro');
    if (intro.innerHTML === "" && !typewriterStarted) {
      typewriterStarted = true;
      typeWriter(); // Call the typewriter function when the link is clicked
    }
  });
});

// Collapsible details section
const detailsToggle = document.getElementById('details-toggle');
const details = document.getElementById('details');

detailsToggle.addEventListener('click', function () {
  details.classList.toggle('hidden');
  details.classList.toggle('transition');
  details.classList.toggle('duration-300');
});










// scroll-triggered fade in for contact form 


const contactSection = document.getElementById('contact');
window.addEventListener('scroll', () => {
  const contactPosition = contactSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (contactPosition < screenPosition) {
    contactSection.classList.add('fade-in');
  }
});

// FAQ functionality
document.querySelectorAll('.faq-title').forEach(title => {
  title.addEventListener('click', function () {
    const faqItem = this.parentElement;
    const faqContent = faqItem.querySelector('.faq-content');
    const faqIcon = faqItem.querySelector('.faq-toggle-icon');

    faqContent.classList.toggle('hidden');
    faqIcon.textContent = faqContent.classList.contains('hidden') ? '+' : '-';
  });
});


// JavaScript to handle the carousel functionality
const testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

// Function to change the visible testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

// Automatically cycle through testimonials every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 3000); // Change the time here (4000 = 4 seconds)


//js for header section 

window.onload = function () {
  // Select elements to animate
  const items = document.querySelectorAll('.slide-into-view');

  // Animate top container items
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('slide-into-view-active');
      // Add specific active classes for final positions
      if (item.classList.contains('slide-from-left')) {
        item.classList.add('slide-from-left-active');
      } else if (item.classList.contains('slide-from-right')) {
        item.classList.add('slide-from-right-active');
      } else if (item.classList.contains('slide-from-top')) {
        item.classList.add('slide-from-top-active');
      } else if (item.classList.contains('slide-from-bottom')) {
        item.classList.add('slide-from-bottom-active');
      }
    }, index * 400); // Delay each item
  });
}

// Select the button and social icons container
const followButton = document.getElementById('follow-button');
const socialIcons = document.getElementById('social-icons');

// Add click event listener to the button
followButton.addEventListener('click', () => {
  // Toggle hidden class and add slide effect
  socialIcons.classList.toggle('hidden');
});



//form validaion 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phoneNumber');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const messageInput = document.getElementById('message');

  // Email validation
  emailInput.addEventListener('input', function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity('');
    }
  });

  // Phone number validation
  phoneInput.addEventListener('input', function () {
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneInput.setCustomValidity("Please enter a valid phone number.");
    } else {
      phoneInput.setCustomValidity('');
    }
  });

  // First name validation
  firstNameInput.addEventListener('input', function () {
    if (firstNameInput.value.trim() === '') {
      firstNameInput.setCustomValidity("First name cannot be empty.");
    } else {
      firstNameInput.setCustomValidity('');
    }
  });

  // Last name validation
  lastNameInput.addEventListener('input', function () {
    if (lastNameInput.value.trim() === '') {
      lastNameInput.setCustomValidity("Last name cannot be empty.");
    } else {
      lastNameInput.setCustomValidity('');
    }
  });

  // Message validation
  messageInput.addEventListener('input', function () {
    if (messageInput.value.trim() === '') {
      messageInput.setCustomValidity("Please enter a message.");
    } else {
      messageInput.setCustomValidity('');
    }
  });

  // Form submit handler
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();  // Prevent form submission if invalid
    } else {
      // Use a timeout to reset the form after a slight delay to ensure the submission goes through
      setTimeout(() => {
        form.reset();  // Reset the form fields
      }, 800);
    }
  });
});

