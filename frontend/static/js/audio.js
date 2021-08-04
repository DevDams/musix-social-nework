window.addEventListener("load", function(){
  const musicPlayer = document.querySelector('.music-player')
  const audio = document.querySelector('#main-audio')
  const playPauseBtn = document.querySelector('.play-pause')
  const progress = document.querySelector('.progress-bar')
  const progressArea = document.querySelector('.progress-area')

  function playMusic () {
    musicPlayer.classList.add('paused')
    playPauseBtn.querySelector('img').src = '/icons/pause.svg'
    audio.play()
  }

  function pauseMusic () {
    musicPlayer.classList.remove('paused')
    playPauseBtn.querySelector('img').src = '/icons/play.svg'
    audio.pause()
  }

  playPauseBtn.addEventListener('click', () => {
    const isMusicPaused = musicPlayer.classList.contains('paused')
    isMusicPaused ? pauseMusic() : playMusic()
  })

  audio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    let progressWidth = (currentTime / duration) * 100
    progress.style.width = `${progressWidth}%`

    let musicDuration = document.querySelector('.duration')
    let musicCurrentTime = document.querySelector('.current')

    let totalMin = Math.floor(duration / 60)
    let totalSec = Math.floor(duration % 60)
    if (totalSec < 10) {
      totalSec = `0${totalSec}`
    }
    musicDuration.innerHTML = `${totalMin}:${totalSec}`

    let currentMin = Math.floor(currentTime / 60)
    let currentSec = Math.floor(currentTime % 60)
    if (currentSec < 10) {
      currentSec = `0${currentSec}`
    }
    musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`
  })



  progressArea.addEventListener('click', (e) => {
    let progressWithVal = progressArea.clientWidth
    let clickedOffsetx = e.offsetX
    let songDuration = audio.duration

    audio.currentTime = (clickedOffsetx / progressWithVal) * songDuration

    playMusic()
  })
});

