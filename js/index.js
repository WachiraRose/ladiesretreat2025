// Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });

    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
      }
    });

    // Banner background slideshow
    const banner = document.getElementById('banner');
    const backgrounds = [
      'img/banner.jpg',
      'groups/group1.jpg',
      'img/banner2.jpg'
    ];
    let current = 0;

    function changeBackground() {
      current = (current + 1) % backgrounds.length;
      banner.style.backgroundImage = `url('${backgrounds[current]}')`;
    }

    // Initialize banner background on page load
    banner.style.backgroundImage = `url('${backgrounds[current]}')`;
    setInterval(changeBackground, 5000);
