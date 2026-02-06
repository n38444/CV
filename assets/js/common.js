(() => {
  // Reset scanlines each visit (OFF by default)
  document.body.classList.remove("scanlines-active");

  // ---------- NAVBAR (same on all pages) ----------
  const navMount = document.getElementById("navMount");
  if (navMount) {
    navMount.innerHTML = `
      <nav class="nav">
        <a class="brand mono" href="index.html">BC//2026</a>
        <div class="nav-links">
          <a href="index.html">HOME</a>
          <a href="cv.html">ONLINE CV</a>
          <a href="links.html">USEFUL LINKS</a>
          <a href="#" id="scanToggle">SCANLINES</a>
        </div>
      </nav>
    `;

    // Scanline toggle (on/off)
    const scanToggle = document.getElementById("scanToggle");
    scanToggle?.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.toggle("scanlines-active");
    });
  }

  // ---------- FOOTER (same on all pages) ----------
  const footerMount = document.getElementById("footerMount");
  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="footer">
        <video class="footer-video" autoplay muted loop playsinline preload="metadata">
          <source src="media/footer.mp4" type="video/mp4">
        </video>

        <div class="footer-overlay grain"></div>

        <div class="footer-content">
          <div class="footer-left">
            <div class="mono">© 2026 Branimir Cujic - n3b444 -</div>
            <div class="muted mono">B&W // low-noise signal // high-contrast UX // Yesterday's Jam</div>
            <div class="muted mono">IT Crowd Theme // flat/brutal/industrial — no fluff. //</div>
          </div>

          <div class="footer-right">
            <a href="cv/CV_2026.pdf" download>DOWNLOAD</a>
            <span class="sep">|</span>
            <a href="cv.html">ONLINE CV</a>
          </div>
        </div>
      </footer>
    `;
  }
})();