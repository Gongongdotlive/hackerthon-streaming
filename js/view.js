(function(){
	const videoItems = document.querySelectorAll(".viewable");
	
	videoItems.forEach(function(videoItem, i){
		let vidId = videoItem.dataset.id;
		videoItem.addEventListener("click", function(e){
			e.preventDefault();

			// store the id in the sessionStorage
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