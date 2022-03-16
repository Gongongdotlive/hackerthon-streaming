(function(){
	const videoItems = document.querySelectorAll(".viewable");
	sessionStorage.removeItem("preview")
	sessionStorage.removeItem("video_provider")
	sessionStorage.removeItem("video-id")
	sessionStorage.removeItem("video-url")
	videoItems.forEach(function(videoItem, i){
		let vidId = videoItem.dataset.id;
		videoItem.addEventListener("click", function(e){
			e.preventDefault();

			sessionStorage.removeItem("preview")
			sessionStorage.removeItem("video_provider")
			sessionStorage.removeItem("video-id")
			sessionStorage.removeItem("video-url")
			// store the data in the sessionStorage
			console.log(vidId)
			if(videoItem.dataset.provider){
				videoUrl = videoItem.dataset.url
				videoProvider = videoItem.dataset.provider;
				sessionStorage.setItem("video_provider", videoProvider);
			}else if(vidId){
				videoUrl = `media/video/${vidId}.mp4`
				sessionStorage.setItem("video-id", vidId);
			}else{
				videoUrl = videoItem.dataset.url
			}
			sessionStorage.setItem("video-url", videoUrl);

			window.location = "view.html"
		})
	})

})()