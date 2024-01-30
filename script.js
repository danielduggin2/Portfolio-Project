// Get a reference to the navbar element
const navBar = document.getElementById('nav-bar');

// Variable to store the width of the navbar
let navBarWidth = navBar.offsetWidth;

// Function to open the navbar
function openNav() {
  navBar.classList.remove('closed');
  // Update the navbar width when it's open
  navBarWidth = navBar.offsetWidth;
  // Adjust the left margin of content
  adjustContentMargin();
}

// Function to close the navbar
function closeNav() {
  navBar.classList.add('closed');
  // Update the navbar width when it's closed
  navBarWidth = navBar.offsetWidth;
  // Adjust the left margin of content
  adjustContentMargin();
}

// Function to toggle the navbar
function toggleNav() {
  navBar.classList.toggle('closed');
  // Update the navbar width when it's toggled
  navBarWidth = navBar.offsetWidth;
  // Adjust the left margin of content
  adjustContentMargin();
}

// Function to adjust the left margin of content
function adjustContentMargin() {
  // Select all sections in the document
  const sections = document.querySelectorAll('section');

  // Loop through each section
  sections.forEach((section) => {
    // Set the left margin of the section
    // If the navbar is closed, set the left margin to '0'
    // If the navbar is open, set the left margin to the width of the navbar
    section.style.marginLeft = navBar.classList.contains('closed') ? '0' : navBarWidth + 'px';
  });
}
