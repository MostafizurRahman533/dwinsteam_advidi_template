let to-Top = document.querySelector(".to-top");

window.addEventListener("scroll",() =>{
	if (window.pageYOffset > 100) {
		to-Top.classList.add("scroup");
	}
	else {
		to-Top.classList.remove("scroup");
	}
	
});

