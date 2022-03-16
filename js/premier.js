(function(){
		const videoItems = document.querySelectorAll(".viewable");
	
	videoItems.forEach(function(videoItem, i){
		let vidId = videoItem.dataset.id;
		videoItem.addEventListener("click", function(e){
			e.preventDefault();

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
			sessionStorage.setItem("preview","true")

			window.location = "view.html"
		})
	})
})()