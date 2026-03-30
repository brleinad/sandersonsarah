// Hamburger menu
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.toggle('nav-open');
    });
  }

  // Close mobile nav when a link is clicked
  var mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
    });
  });

  // Lightbox
  var overlay = document.getElementById('lightbox-overlay');
  var overlayImg = document.getElementById('lightbox-img');
  var overlayCaption = document.getElementById('lightbox-caption');
  var closeBtn = document.getElementById('lightbox-close');

  if (!overlay) return;

  function openLightbox(src, caption) {
    overlayImg.src = src;
    overlayCaption.textContent = caption || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    overlayImg.src = '';
    document.body.style.overflow = '';
  }

  // Attach to all gallery links
  document.querySelectorAll('a[data-lightbox]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(this.href, this.getAttribute('data-caption') || '');
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
