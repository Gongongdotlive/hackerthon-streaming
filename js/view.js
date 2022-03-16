(function(){

	
	const videoItems = document.querySelectorAll(".viewable");
	
	videoItems.forEach(function(videoItem, i){

		let vidId = videoItem.dataset.id;
		let videoTypeUrl = videoItem.dataset.url;

		videoItem.addEventListener("click", function(e){
			e.preventDefault();

			// store the id in the sessionStorage
			console.log(videoTypeUrl)
			if(videoTypeUrl){

				sessionStorage.setItem("video-id", vidId);
				sessionStorage.setItem("video-url", videoItem.dataset.url);

			}else{
				// get local version of video

				videoUrl = `media/video/${vidId}.mp4`;
				sessionStorage.setItem("video-id", vidId);
				sessionStorage.setItem("video-url", videoUrl);
				sessionStorage.setItem("premier", false);
			}

			window.location = "view.html"
		})
	})

})()