var audio = new Audio('src/bg_sound.mp3')
// audio.play()
audio.volume = 0.35

bgM = document.querySelector('.bg_music')

const play = () => {
    if (document.querySelector('.off')) {
        audio.play()
        bgM.classList.remove('off')
        bgM.classList.add('play')
    }
    else {
        audio.pause()
        bgM.classList.remove('play')
        bgM.classList.add('off')

    }
}

bgM.addEventListener('click', play)

audio.addEventListener("ended", function () {
    bgM.classList.remove('play')
    bgM.classList.add('off')
});
