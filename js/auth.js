(function(){
		let body = document.querySelector("body");
		const loginForm = document.forms[0];
		const loginModal = document.getElementById("loginModal")
		const usernameEl = document.querySelector(".username");


		loginForm.addEventListener("submit", function(e){
				e.preventDefault();
				handleLogin(this)
			})

			function handleLogin(form){

				let formData = new FormData(form);
				let username = formData.get("name");
				// save to sessionStorage for demo
				sessionStorage.setItem('username', username);
				body.classList.add("logged-in")

				// close modal
				// loginModal.hide()

				// hide login and sign up btns
				usernameEl.innerText = username;
			}



	if (sessionStorage.getItem('username')){

		// let body = document.querySelector("body");
		// const usernameEl = document.querySelector(".username");
		usernameEl.innerText = sessionStorage.getItem('username');
		body.classList.add("logged-in")

	}else{
		console.log("logged out")
	}



})()