/* ============================================================
   MODERN ENHANCEMENTS — scroll-reveal, news toggle, dark mode
   ============================================================ */

(function () {
  'use strict';

  /* ---- Scroll-reveal via Intersection Observer ----------- */
  function initReveal() {
    const targets = document.querySelectorAll('.reveal, .reveal-left');
    if (!targets.length) return;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---- News timeline: tag items + add show-more button --- */
  function initNews() {
    var container = document.getElementById('news-container');
    if (!container) return;

    var items = container.querySelectorAll('.news-item');
    var VISIBLE = 5;

    if (items.length <= VISIBLE) return; // nothing to collapse

    items.forEach(function (item, i) {
      if (i >= VISIBLE) item.classList.add('news-hidden');
    });

    var btn = document.createElement('button');
    btn.id = 'news-toggle';
    btn.innerHTML = 'Show more <span class="arrow">&#9660;</span>';
    container.parentNode.insertBefore(btn, container.nextSibling);

    btn.addEventListener('click', function () {
      var expanded = btn.classList.toggle('expanded');
      items.forEach(function (item, i) {
        if (i >= VISIBLE) {
          if (expanded) {
            item.classList.remove('news-hidden');
          } else {
            item.classList.add('news-hidden');
          }
        }
      });
      btn.innerHTML = (expanded ? 'Show less' : 'Show more') +
                      ' <span class="arrow">' + (expanded ? '&#9650;' : '&#9660;') + '</span>';
    });
  }

  /* ---- Dark mode toggle ---------------------------------- */
  function initDarkMode() {
    var saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);

    var btn = document.createElement('button');
    btn.id = 'dark-mode-toggle';
    btn.title = 'Toggle dark mode';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    updateIcon(btn);
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateIcon(btn);
    });

    function updateIcon(b) {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      b.innerHTML = dark ? '&#9728;' : '&#9790;';
    }
  }

  /* ---- Staggered reveal for news items ------------------- */
  function staggerNewsReveal() {
    var items = document.querySelectorAll('.news-item');
    items.forEach(function (item, i) {
      item.style.transitionDelay = (i * 60) + 'ms';
    });
  }

  /* ---- Publications: cards, badges, collapsible citations - */
  function initPublications() {
    var content = document.querySelector('.page__content') || document.querySelector('.archive');
    if (!content) return;

    // Map section h2 text → badge class + label
    var CATEGORY_MAP = {
      'journal': { cls: 'pub-badge-journal', label: 'Journal' },
      'conference': { cls: 'pub-badge-conf',    label: 'Conference' },
      'patent':   { cls: 'pub-badge-patent',  label: 'Patent' },
      'e-print':  { cls: 'pub-badge-eprint',  label: 'E-Print' },
      'preprint': { cls: 'pub-badge-eprint',  label: 'E-Print' },
    };

    function badgeForHeading(text) {
      var t = (text || '').toLowerCase();
      for (var key in CATEGORY_MAP) {
        if (t.indexOf(key) !== -1) return CATEGORY_MAP[key];
      }
      return null;
    }

    var currentBadge = null;
    var children = Array.from(content.children);
    if (!children.length) return;

    var cardIndex = 0;

    // Walk direct children to track section heading per category
    children.forEach(function (el) {
      if (el.tagName === 'H2') {
        currentBadge = badgeForHeading(el.textContent);
        return;
      }
      if (!el.classList.contains('list__item')) return;
      var article = el.querySelector('.archive__item');
      if (!article) return;

      // --- Badge on the title ---
      if (currentBadge) {
        var titleEl = article.querySelector('.archive__item-title');
        if (titleEl) {
          var badge = document.createElement('span');
          badge.className = 'pub-badge ' + currentBadge.cls;
          badge.textContent = currentBadge.label;
          titleEl.appendChild(badge);
        }
      }

      // --- Collapse citation + restyle Download links ---
      var paras = article.querySelectorAll('p');
      paras.forEach(function (p) {
        var text = p.textContent || '';

        // Citation paragraph (starts with "Recommended citation:")
        if (text.trim().indexOf('Recommended citation:') === 0) {
          // Extract just the citation text (without download links)
          var citationText = text.replace(/^Recommended citation:\s*/, '').split('\n')[0].trim();

          // Build collapsed citation block
          var citeDiv = document.createElement('div');
          citeDiv.className = 'pub-citation';
          citeDiv.textContent = citationText;

          // Build actions row
          var actionsDiv = document.createElement('div');
          actionsDiv.className = 'pub-actions';

          // Cite toggle button
          var citeBtn = document.createElement('button');
          citeBtn.className = 'cite-toggle';
          citeBtn.innerHTML = 'Cite <span class="arrow">&#9660;</span>';
          citeBtn.addEventListener('click', function () {
            var open = citeBtn.classList.toggle('open');
            citeDiv.classList.toggle('open', open);
          });
          actionsDiv.appendChild(citeBtn);

          // Re-create download links as pill buttons
          var links = p.querySelectorAll('a');
          links.forEach(function (a) {
            var href = a.href;
            var label = (a.textContent || '').trim();
            var btn = document.createElement('a');
            btn.href = href;
            btn.target = '_blank';
            btn.rel = 'noopener';
            btn.className = 'pub-btn';
            if (label.toLowerCase().indexOf('paper') !== -1) {
              btn.classList.add('pub-btn-paper');
              btn.innerHTML = '&#8595; Paper';
            } else if (label.toLowerCase().indexOf('slide') !== -1) {
              btn.classList.add('pub-btn-slides');
              btn.innerHTML = '&#9654; Slides';
            } else if (label.toLowerCase().indexOf('bibtex') !== -1) {
              btn.classList.add('pub-btn-bibtex');
              btn.innerHTML = '{ } BibTeX';
            } else {
              btn.classList.add('pub-btn-paper');
              btn.textContent = label;
            }
            actionsDiv.appendChild(btn);
          });

          p.parentNode.insertBefore(actionsDiv, p);
          p.parentNode.insertBefore(citeDiv, p);
          p.remove();
        }
      });

      // --- Staggered CSS animation ---
      el.classList.add('item-animate');
      el.style.animationDelay = (cardIndex * 60) + 'ms';
      cardIndex++;
    });
  }

  /* ---- Teaching: inject styled cards ---------------------- */
  function initTeaching() {
    var content = document.querySelector('.page__content') || document.querySelector('.archive');
    if (!content) return;
    var items = content.querySelectorAll('.list__item');
    if (!items.length) return;

    // Only run on teaching page
    var isTeaching = window.location.pathname.indexOf('/teaching') !== -1;
    if (!isTeaching) return;

    items.forEach(function (item, i) {
      var article = item.querySelector('.archive__item');
      if (!article) return;

      var titleEl = article.querySelector('.archive__item-title');
      var metaEl  = article.querySelector('p');

      var role   = titleEl ? titleEl.textContent.trim() : 'Teaching Assistant';
      var meta   = metaEl  ? metaEl.textContent.trim()  : '';

      // Parse "CourseCode, Venue, Year" from meta text
      var parts  = meta.split(',');
      var course = parts[0] ? parts[0].trim() : '';
      var rest   = parts.slice(1).join(',').trim();

      var card = document.createElement('div');
      card.className = 'teaching-card item-animate';
      card.style.animationDelay = (i * 100) + 'ms';
      card.innerHTML =
        '<div class="teaching-icon">🎓</div>' +
        '<div class="teaching-body">' +
          '<span class="teaching-role">' + role + '</span>' +
          '<div class="teaching-course">' + course + '</div>' +
          '<div class="teaching-meta">' + rest + '</div>' +
        '</div>';

      item.parentNode.insertBefore(card, item);
      item.style.display = 'none';
    });
  }

  /* ---- Avatar lightbox ----------------------------------- */
  function initAvatarLightbox() {
    var img = document.querySelector('.author__avatar img');
    if (!img) return;

    // Make avatar look clickable
    img.style.cursor = 'pointer';
    img.title = 'View full size';

    // Build overlay
    var overlay = document.createElement('div');
    overlay.id = 'avatar-lightbox';
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Profile photo');
    overlay.innerHTML =
      '<button id="avatar-lb-close" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
      '</button>' +
      '<img id="avatar-lb-img" src="' + img.src + '" alt="' + (img.alt || 'Profile photo') + '">';
    document.body.appendChild(overlay);

    function open() {
      overlay.classList.add('lb-open');
      document.body.style.overflow = 'hidden';
      document.getElementById('avatar-lb-close').focus();
    }
    function close() {
      overlay.classList.remove('lb-open');
      document.body.style.overflow = '';
    }

    img.addEventListener('click', open);
    document.getElementById('avatar-lb-close').addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('lb-open')) close();
    });
  }

  /* ---- Boot --------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initNews();
    initDarkMode();
    staggerNewsReveal();
    initPublications();
    initTeaching();
    initAvatarLightbox();
  });
})();
