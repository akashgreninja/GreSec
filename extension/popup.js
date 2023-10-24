document.addEventListener('DOMContentLoaded', () => {
  // Get all the tab links
  const tabLinks = document.querySelectorAll('.nav-link');

  // Loop through each tab link
  tabLinks.forEach((link) => {
    // Add a click event listener to the link
    link.addEventListener('click', (event) => {
      // Prevent the default link behavior
      event.preventDefault();

      // Remove the 'active' class from all tab links
      tabLinks.forEach((link) => {
        link.classList.remove('active');
      });

      // Add the 'active' class to the clicked tab link
      event.target.classList.add('active');
    });
  });
});