// navbar.js
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  // Map path to corresponding link IDs
  const pageLinks = {
    "/": "home-link",
    "/contact": "contact-link",
    "/todo-view": "todo-link",
  };

  // Remove 'active' class from all links
  Object.values(pageLinks).forEach((id) => {
    const link = document.getElementById(id);
    if (link) link.classList.remove("active");
  });

  // Add 'active' class to the current page link
  const activeLinkId = pageLinks[currentPath];
  if (activeLinkId) {
    const activeLink = document.getElementById(activeLinkId);
    if (activeLink) activeLink.classList.add("active");
  }
});

