document.addEventListener('DOMContentLoaded', (event) => {
  const navbarLinks =document.querySelectorALL('.NAVBAR A');
  navbarLinks.forEach(link => {
    link.addEventListener ('click', (event) => {
      event.preventDefault();
      alert("You clicked on ${event.target.textContent}");
    });

  });
  
});
