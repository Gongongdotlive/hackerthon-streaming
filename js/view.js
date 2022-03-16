(function(){
	const videoItems = document.querySelectorAll(".viewable");
	
	videoItems.forEach(function(videoItem, i){
		let vidId = videoItem.dataset.id;
		videoItem.addEventListener("click", function(e){
			e.preventDefault();

			// store the id in the sessionStorage
			console.log(vidId)
			if(videoItem.dataset.url){
				sessionStorage.setItem("video-id", vidId);
				sessionStorage.setItem("video-url", videoItem.dataset.url);
			}else{
				// get local version of video
				videoUrl = `media/video/${vidId}.mp4`
				sessionStorage.setItem("video-id", vidId);
				sessionStorage.setItem("video-url", videoUrl);
			}

			window.location = "view.html"
		})
	})

})()