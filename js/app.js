const videoEL = document.querySelector('video')

videoEL.addEventListener('ended', () {
    videoEL.src=''
 
})