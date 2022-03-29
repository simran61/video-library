//TOGGLE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

// navbar shadow
window.addEventListener('scroll',(e)=>{
  const navbar = document.querySelector('.navbar');
  if(window.pageYOffset>0){
    navbar.classList.add("add-shadow");
  }else{
    navbar.classList.remove("add-shadow");
  }
});
