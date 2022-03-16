(function(window){

	// const videoEl = document.querySelector("#promo-video")
	const menuToggle = document.querySelector(".mobile--menu");
	const menu = document.getElementById("nav-icon3");
	const body = document.querySelector("body");



	menuToggle.addEventListener("click", toggleMenu)

	function toggleMenu(e){
		e.preventDefault();
		body.classList.toggle("menu-open");
		menu.classList.toggle("open");
	}


		window.onload = function(){
			try{
				ScrollOut({
					cssProps: {
						viewportY: true,
						visibleY: true

					}
				});

				console.log("loaded scroll")
			}catch(err){
				console.log(err + " this is the error")
			}


			
		}



	
})(window)