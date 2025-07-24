// Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Filter logic for tabs only
    const gallery = document.getElementById('gallery');
    const tabs = document.getElementById('tabs').querySelectorAll('button');

    function filterGallery(category) {
      const items = gallery.querySelectorAll('.gallery-item');
      items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Remove active from all tabs and add to selected
    function setActive(elements, activeElement) {
      elements.forEach(el => el.classList.remove('active'));
      activeElement.classList.add('active');
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.filter;
        filterGallery(filter);
        setActive(tabs, tab);
      });
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = gallery.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const type = item.dataset.type;
        const src = item.dataset.src;
        const caption = item.dataset.caption;

        // Clear previous content
        lightboxContent.innerHTML = '';

        if (type === 'image') {
          const img = document.createElement('img');
          img.src = src;
          img.alt = caption;
          lightboxContent.appendChild(img);
        } else if (type === 'video') {
          const video = document.createElement('video');
          video.src = src;
          video.controls = true;
          video.autoplay = true;
          video.playsInline = true;
          video.style.maxWidth = '100%';
          lightboxContent.appendChild(video);
        }

        lightbox.classList.add('active');
        lightbox.focus();
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      // Pause video if playing
      const video = lightboxContent.querySelector('video');
      if (video) video.pause();
      lightboxContent.innerHTML = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    window.addEventListener('keydown', e => {
      if (e.key === "Escape" && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });