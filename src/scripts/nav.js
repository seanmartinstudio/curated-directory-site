document.querySelector('.hamburger').addEventListener('click', () => {
    const element = document.querySelector('.nav-links');
    if (element.style.display === "none") {
      element.style.display = "grid";
  } else {
      element.style.display = "none";
  }
  });