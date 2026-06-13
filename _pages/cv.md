---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div class="cv-page">

  <div class="cv-toolbar">
    <span class="cv-toolbar-label">Saif Eddine Nouma — CV</span>
    <div class="cv-toolbar-actions">
      <a href="/files/cv.pdf" download="Saif_Nouma_CV.pdf" class="cv-btn cv-btn-dl">
        &#8595;&nbsp;Download PDF
      </a>
      <button class="cv-btn cv-btn-print" id="cv-print-btn">
        &#128438;&nbsp;Print
      </button>
    </div>
  </div>

  <div class="cv-frame-wrap">
    <iframe
      id="cv-frame"
      src="/files/cv.pdf#view=FitH&pagemode=none"
      title="Curriculum Vitae"
    ></iframe>
  </div>

</div>

<script>
document.getElementById('cv-print-btn').addEventListener('click', function () {
  var w = window.open('/files/cv.pdf');
  if (w) {
    w.addEventListener('load', function () {
      setTimeout(function () { w.print(); }, 400);
    });
  }
});
</script>
