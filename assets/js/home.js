const BG_IMAGES = [
  "/media/File1.webp",
  "/media/File2.webp",
  "/media/File3.webp",
  "/media/File4.webp",
  "/media/File5.webp",
  "/media/File6.webp",
];

function initScrollBackgroundRail() {
  const stage = document.getElementById("bgStage");
  if (!stage) return;

  // Create rail container
  const rail = document.createElement("div");
  rail.className = "bg-rail";
  rail.id = "bgRail";

  // Create one full-viewport panel per image
  BG_IMAGES.forEach((src) => {
    const item = document.createElement("div");
    item.className = "bg-rail-item";
    item.style.backgroundImage = `url("${src}")`;
    rail.appendChild(item);
  });

  stage.prepend(rail);

  // Create enough scroll height so you can scroll through all images
  const spacer = document.getElementById("scrollSpacer");
  const setSizes = () => {
    const vh = window.innerHeight;
    const total = BG_IMAGES.length * vh;

    // Spacer is the scrollable space BEFORE footer
    if (spacer) spacer.style.height = `${Math.max(0, total - vh)}px`;
  };

  const onScroll = () => {
    const railEl = document.getElementById("bgRail");
    if (!railEl) return;

    const vh = window.innerHeight;
    const maxShift = (BG_IMAGES.length * vh) - vh; // how far the rail can move up
    const y = Math.min(Math.max(window.scrollY, 0), maxShift);

    // Move the rail upward as you scroll
    railEl.style.transform = `translateY(${-y}px)`;
  };

  setSizes();
  onScroll();

  window.addEventListener("resize", () => {
    setSizes();
    onScroll();
  }, { passive: true });

  window.addEventListener("scroll", onScroll, { passive: true });
}

window.addEventListener("DOMContentLoaded", initScrollBackgroundRail);