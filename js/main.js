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


// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden'); // Toggle the visibility of the mobile menu
});

// Select all learn more buttons
document.querySelectorAll('.learn-more-btn').forEach(button => {
  button.addEventListener('click', function () {
    // Get the project detail for the clicked button
    const projectDetail = this.nextElementSibling;

    // Get all project details
    const allProjectDetails = document.querySelectorAll('.project-detail');

    // Hide all project details except the one clicked
    allProjectDetails.forEach(detail => {
      // Only hide if it's not the clicked project detail
      if (detail !== projectDetail) {
        detail.classList.add('hidden');
      }
    });

    // Toggle visibility for the clicked project detail
    projectDetail.classList.toggle('hidden');
  });
});

// JavaScript for the Contact Form

// document.addEventListener('DOMContentLoaded', function () {
//   const contactForm = document.getElementById('contact-form');
//   const contactSection = document.getElementById('contact');

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         contactForm.classList.add('fade-in'); // Add fade-in class
//         observer.unobserve(contactSection); // Stop observing after fading in
//       }
//     });
//   }, {
//     threshold: 0.5 // Fade in when 50% of the section is visible
//   });

//   observer.observe(contactSection); // Observe the contact section

//   // Handle form submission
//   document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const form = e.target;

//     // Example: Submit to Formspree
//     const formData = new FormData(form);
//     fetch('https://formspree.io/f/YOUR_FORM_ID', { // Replace with your Formspree ID
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json'
//       }
//     }).then(response => {
//       if (response.ok) {
//         alert('Thanks for your message!');
//         form.reset(); // Reset the form after successful submission
//       } else {
//         alert('Oops! There was a problem submitting your form');
//       }
//     });
//   });
// });


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

// Testimonials Carousel Animation
// let currentTestimonial = 0;
// const testimonials = document.querySelectorAll('.testimonial-slide');

// function showNextTestimonial() {
//   testimonials[currentTestimonial].classList.remove('opacity-100');
//   testimonials[currentTestimonial].classList.add('opacity-0');

//   currentTestimonial = (currentTestimonial + 1) % testimonials.length;

//   testimonials[currentTestimonial].classList.remove('opacity-0');
//   testimonials[currentTestimonial].classList.add('opacity-100');
// }

// setInterval(showNextTestimonial, 4000);
// testimonials[0].classList.add('opacity-100');

//js to handle tesimonial carousel

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
}, 4000); // Change the time here (4000 = 4 seconds)


//js for header section 

window.onload = function() {
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
      }, index * 300); // Delay each item
  });
}