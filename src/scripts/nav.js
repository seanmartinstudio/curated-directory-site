// document.querySelector('.hamburger').addEventListener('click', () => {
//     const element = document.querySelector('.nav-links');
//     if (element.style.display === "none") {
//       element.style.display = "grid";
//   } else {
//       element.style.display = "none";
//   }
//   });

document.querySelector('.hamburger').addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevents default touch behavior (like scrolling)

  const element = document.querySelector('.nav-links');
  if (element.style.display === "none") {
      element.style.display = "grid";
  } else {
      element.style.display = "none";
  }
});