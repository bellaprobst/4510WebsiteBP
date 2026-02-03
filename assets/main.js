// Highlight the active nav link based on the current page
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".navlinks a");
  links.forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
