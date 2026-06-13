---
permalink: /projects/
title: ""
author_profile: true
---

<h2 style="margin-top:0;">🛠️ Projects</h2>

<p class="reveal" style="text-align:justify; margin-bottom:1.6rem;">
  Flagship security tools. Each project targets a specific security gap in IoT and embedded computing, with full implementations on real hardware and peer-reviewed publications.
</p>

<!-- ── AUTHENTICATED ENCRYPTION ───────────────────────────── -->
<h3 class="project-section-label reveal">Authenticated Encryption</h3>

<div class="project-card reveal" id="diamond">
  <div class="project-header">
    <div>
      <span class="project-name">💎 Diamond</span>
      <span class="project-status status-review">Under Review</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/saifnouma/diamond" target="_blank" class="proj-btn proj-btn-code">⌥ Code</a>
      <a href="https://ieeexplore.ieee.org/abstract/document/11310288?casa_token=zxp-B3Dg7IwAAAAA:QpYkmjw33nJQAdplWyPI9wRqMOOP9Rsh7pGTvpQenXF6xlCl4sb1Oua0pj3weuVXVeDCLxhDNTQ" target="_blank" class="proj-btn proj-btn-paper">↗ IEEE MILCOM'25 </a>
      <a href="https://arxiv.org/abs/2601.00353" target="_blank" class="proj-btn proj-btn-paper">↗ arXiv</a>
    </div>
  </div>
  <p class="project-desc">
    End-to-end breach-resilient and compact authenticated encryption framework for IoT. 
  </p>
  <div class="project-tags">
    <span class="ptag ptag-crypto">Authenticated Encryption</span>
    <span class="ptag ptag-security">Breach-Resilient</span>
    <span class="ptag ptag-iot">IoT</span>
    <span class="ptag ptag-hw">ARM / AVR</span>
  </div>
  <div class="project-meta">📄 Under review at <em>ACM TECS</em> · IEEE MILCOM 2025</div>
</div>

<!-- ── DIGITAL SIGNATURES ──────────────────────────────────── -->
<h3 class="project-section-label reveal">Digital Signatures</h3>

<div class="project-card reveal" id="hases">
  <div class="project-header">
    <div>
      <span class="project-name">🔐 HASES</span>
      <span class="project-status status-published">Published</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/saifnouma/hyhases" target="_blank" class="proj-btn proj-btn-code">⌥ Code</a>
      <a href="https://ieeexplore.ieee.org/abstract/document/10279236?casa_token=fXuLNe39UMQAAAAA:o-sVubZF8T_hZmANG6AjQN80i02TTOi1CPwlllsWHreVxc315XtAcDbI0Sfi6VxN8_0lTGcg1Fc" target="_blank" class="proj-btn proj-btn-paper">↗ IEEE ICC'23</a>
      <a href="https://dl.acm.org/doi/full/10.1145/3638250" target="_blank" class="proj-btn proj-btn-paper">↗ ACM TOMM'24</a>
      <a href="https://patents.google.com/patent/US20230308289A1" target="_blank" class="proj-btn proj-btn-patent">🏛 Patent</a>
    </div>
  </div>
  <p class="project-desc">
    Hardware-Assisted Efficient Signature (HASES). 
    <!-- The first digital signature enabling post-quantum authentication with compromise resiliency using TEEs. <strong>34× more efficient than NIST ML-DSA</strong> on 8-bit AVR ATmega2560. Combined with conventional aggregate signature for backward compatibility and bandwidth reduction. -->
  </p>
  <div class="project-tags">
    <span class="ptag ptag-crypto">Digital Signature</span>
    <span class="ptag ptag-pq">Post-Quantum</span>
    <span class="ptag ptag-security">Forward-Secure</span>
    <span class="ptag ptag-hw">Intel SGX</span>
    <span class="ptag ptag-hw">AVR</span>
  </div>
  <div class="project-meta">📄 IEEE ICC 2023 · ACM TOMM 2024 · U.S. Patent US20230308289A1</div>
</div>

<div class="project-card reveal" id="lrsha">
  <div class="project-header">
    <div>
      <span class="project-name">☁️ LRSHA</span>
      <span class="project-status status-published">Published</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/saifnouma/lrsha" target="_blank" class="proj-btn proj-btn-code">⌥ Code</a>
      <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/spy2.70173" target="_blank" class="proj-btn proj-btn-paper">↗ Wiley Security & Privacy'26</a>
    </div>
  </div>
  <p class="project-desc">
    Lightweight and Resilient Signatures for Cloud-Assisted Embedded IoT.
     <!-- Leverages distributed cloud assistance and Intel SGX secure hardware to offload signing overhead from constrained devices, confirmed efficient on 8-bit AVR ATmega2560 and commodity hardware. -->
  </p>
  <div class="project-tags">
    <span class="ptag ptag-crypto">Digital Signature</span>
    <span class="ptag ptag-hw">Intel SGX</span>
    <span class="ptag ptag-hw">AVR</span>
    <span class="ptag ptag-security">Cloud-Assisted</span>
  </div>
  <div class="project-meta">📄 Wiley Security &amp; Privacy 2026</div>
</div>

<div class="project-card reveal" id="liteqsign">
  <div class="project-header">
    <div>
      <span class="project-name">⚛️ LiteQSign</span>
      <span class="project-status status-published">Published</span>
    </div>
    <div class="project-links">
      <a href="https://ieeexplore.ieee.org/document/10680128" target="_blank" class="proj-btn proj-btn-paper">↗ IEEE Access</a>
    </div>
  </div>
  <p class="project-desc">
    Lightweight post-quantum digital signature via Fully Homomorphic Encryption (FHE).
    <!-- , without relying on TEEs or external entities. Achieves <strong>up to 24× energy savings</strong> compared to NIST post-quantum standards on an 8-bit microcontroller. -->
  </p>
  <div class="project-tags">
    <span class="ptag ptag-crypto">Digital Signature</span>
    <span class="ptag ptag-pq">Post-Quantum</span>
    <span class="ptag ptag-security">FHE-based</span>
    <span class="ptag ptag-iot">IoT</span>
  </div>
  <div class="project-meta">📄 IEEE Access</div>
</div>

<!-- ── SECURE LOGGING ─────────────────────────────────────── -->
<h3 class="project-section-label reveal">Secure Audit Logging</h3>

<div class="project-card reveal" id="oslo">
  <div class="project-header">
    <div>
      <span class="project-name">📋 POSLO</span>
      <span class="project-status status-published">Published</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/saifnouma/poslo" target="_blank" class="proj-btn proj-btn-code">⌥ Code</a>
      <a href="https://patents.google.com/patent/US20240007300A1" target="_blank" class="proj-btn proj-btn-patent">🏛 Patent</a>
    </div>
  </div>
  <p class="project-desc">
    A series of aggregate digital signatures for IoT audit trails. 
    <!-- <strong>POSLO</strong> (Parallel OSLO) extends this with a GPU-accelerated batch verification architecture, enabling auditing of <strong>terabyte-scale log archives</strong> in dramatically reduced time. Provably secure with formal proofs. -->
  </p>
  <div class="project-tags">
    <span class="ptag ptag-crypto">Aggregate Digital Signatures</span>
    <span class="ptag ptag-hw">GPU</span>
    <span class="ptag ptag-hw">AVR</span>
    <span class="ptag ptag-security">Forensic Logging</span>
  </div>
  <div class="project-meta">📄 ACM/IEEE IoTDI 2023 · ACM TIoT 2026 · U.S. Patent US20240007300A1</div>
</div>

<!-- ── HARDWARE AUTHENTICATION ────────────────────────────── -->
<h3 class="project-section-label reveal">Hardware Authentication</h3>

<div class="project-card reveal" id="puf">
  <div class="project-header">
    <div>
      <span class="project-name">📡 RF-PUF Authentication</span>
      <span class="project-status status-published">Published</span>
    </div>
    <div class="project-links">
      <a href="https://ieeexplore.ieee.org/document/10605120" target="_blank" class="proj-btn proj-btn-paper">↗ IEEE Access</a>
    </div>
  </div>
  <p class="project-desc">
    An authentication protocol using additively manufactured RF with Physically Unclonable Functions. 
    <!-- Embeds PUF structures directly into the physical design of RF components for tamper-resistant, cost-effective device authentication. ARL-funded cross-disciplinary project with Electrical Engineering. -->
  </p>
  <div class="project-tags">
    <span class="ptag ptag-hw">RF Electronics</span>
    <span class="ptag ptag-security">PUF</span>
    <span class="ptag ptag-iot">Wireless Security</span>
  </div>
  <div class="project-meta">📄 IEEE Access</div>
</div>
