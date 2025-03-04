document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navContainer = document.querySelector('.nav-container');

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navContainer.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking on links
  const menuLinks = document.querySelectorAll('.nav-container a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navContainer.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}); 