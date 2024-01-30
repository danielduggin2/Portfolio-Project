// Get a reference to the navbar element
const navBar = document.getElementById('navbar');

// Function to toggle the navbar
function toggleNav() {
  navBar.classList.toggle('half-width');
  adjustContentMargin();
}

// Function to adjust the left margin of content
function adjustContentMargin() {
  // Select all sections in the document
  const sections = document.querySelectorAll('section');

  // Get the width of the button inside the navbar
  const buttonWidth = document.querySelector('#navbar button').offsetWidth;

  // Get the width of the navbar
  const navbarWidth = navBar.offsetWidth;

  // Calculate the new width (half of the original width)
  const newNavbarWidth = navbarWidth / 2;

  // Loop through each section
  sections.forEach((section) => {
    // Set the left margin of the section
    // If the navbar is in half-width state, set the left margin to half of the navbar width
    // If the navbar is not in half-width state, set the left margin to the full navbar width
    section.style.marginLeft = navBar.classList.contains('half-width') ? newNavbarWidth + 'px' : navbarWidth + 'px';
  });
}
