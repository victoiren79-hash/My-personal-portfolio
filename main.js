const navLinks = document.querySelectorAll('.links a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('name'));
      link.classList.add('name');
    });
  });


  