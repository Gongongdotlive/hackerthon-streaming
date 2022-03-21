


(function(window){

window.addEventListener("load", function(){

    const videoEl = document.querySelector("video");
    const cl = window.cloudinaryJsStreaming
    let livestream;
    const facingMode = {
        exact:"user"
    }

cl.initLiveStream({
    cloud_name: "primetech-africa",
    uploadPreset: 'ajnog3lw',
    debug: "all",
    hlsTarget: true,
    fileTarget: true,
    events: {
        start: function (args) {
            // user code
            console.log("start")
        },
        stop: function (args) {
            // user code
             console.log("stop")
        },
        error: function(error){
            // user code
             console.log("error")
        },
        local_stream: function (stream) {
            // user code, typically attaching the stream to a video view:
             console.log("locality")
        }
    }
}).then(result => {
    livestream = result;
    console.log(livestream);

    cl.attachCamera(videoEl,facingMode);
})



})

const streamButtons = document.querySelectorAll("[data-stream]");

    streamButtons.forEach(function(streamBtn,i){
        streamBtn.addEventListener("click", function(e){
            e.preventDefault();
             
            streamState(this)
            
        })
    })

// impure function
function streamState(buttonEl){
    const streamBtnData = buttonEl.dataset.stream;
    switch(streamBtnData){
        case("start"):
            console.log(streamBtnData);
            livestream.start('primetech-africa');
            break;
        case("stop"):
            livestream.stop();
            detachCamera(videoEL).then(videoElement=>console.log(videoElement));
    }
}







})(window)

