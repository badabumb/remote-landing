// ============================================================
// FAQ accordion — one open at a time, click toggles
// ============================================================
(function () {
  var cards = document.querySelectorAll('.faq-card');
  cards.forEach(function (card) {
    var head = card.querySelector('.faq-card__head');
    if (!head) return;
    head.addEventListener('click', function () {
      var willOpen = !card.classList.contains('is-open');
      cards.forEach(function (c) {
        c.classList.remove('is-open');
        var h = c.querySelector('.faq-card__head');
        if (h) h.setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        card.classList.add('is-open');
        head.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

// ============================================================
// Lightbox — tap a case image to view it larger
// ============================================================
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;
  var img = box.querySelector('.lightbox__img');
  var closeBtn = box.querySelector('.lightbox__close');

  function open(src) {
    img.setAttribute('src', src);
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    img.setAttribute('src', '');
  }

  document.querySelectorAll('.case__img').forEach(function (el) {
    el.addEventListener('click', function () {
      var src = el.getAttribute('data-full');
      if (src) open(src);
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var src = el.getAttribute('data-full');
        if (src) open(src);
      }
    });
  });

  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) {
    if (e.target === box) close(); // click on backdrop
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box.classList.contains('is-open')) close();
  });
})();

// ============================================================
// Smooth-scroll for in-page anchors (graceful fallback)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var id = anchor.getAttribute('href');
    if (id.length < 2) return;
    var target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
