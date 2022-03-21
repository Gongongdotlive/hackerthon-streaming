// import {Streamer} from '@cloudinary/js-streaming';
const video = document.getElementById("video");
const facingMode =  { exact: "user" };
const liveStreamOptions = {};
const streamer = new Streamer(video);

// Show camera in an html <video> element
// facingMode is optional
streamer.attachCamera(facingMode)
.then(stream => console.log(stream));

// Remove camera from an html <video> element
streamer.detachCamera()
.then(videoElement=>console.log(videoElement));

// Initialize live-streaming using streaming configuration object
streamer.initLiveStream(liveStreamOptions)
.then(result => console.log(result));