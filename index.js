
  document.getElementById('todo').addEventListener('click', function() {
    let navbar = document.querySelector('.navbar-nav');
    navbar.style.visibility = (navbar.style.visibility === 'visible') ? 'hidden' : 'visible';
  });
