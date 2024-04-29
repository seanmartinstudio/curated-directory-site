document.querySelector('.hamburger').addEventListener('touchstart', () => {
    const element = document.querySelector('.nav-links');
    if (element.style.display === "none") {
      element.style.display = "grid";
  } else {
      element.style.display = "none";
  }
  });