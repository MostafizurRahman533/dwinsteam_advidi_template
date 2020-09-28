window.addEventListener("scroll", function(){
	
	let header = document.querySelector("header", "to-top");
	header.classList.toggle("sticky", window.scrollY > 100); 
})
  
let menu = document.querySelector('.menu')
  menu.addEventListener('click', (e) => {
    document.querySelector('ul').classList.toggle('burger-active');
  })
  const navslider = () => {
	  const burger = document.querySelector(".burger");
	  const nav = document.querySelector ("ul");
	  
	  burger.addEventListener('click', () => {
		  
		  nav.classList.toggle('burger-active');
		  })
	  
  }
  
  navslider();
  
  
  

  
  
  

