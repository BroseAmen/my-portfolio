const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const hoversign = document.querySelector('.hover-sign');
const videolist = [video1, video2, video3];

videolist.forEach(function(video){
    video.addEventListener('mouseover', function() {
        // Add your event handling logic here
        video.play()
        hoversign.classList.add("active")
    })
    video.addEventListener('mouseout', function() {
        // Add your event handling logic here
        video.pause()
        hoversign.classList.remove("active")
    })
})

