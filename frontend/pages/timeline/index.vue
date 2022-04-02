<template>
  <div>
    <!-- Commencez à coder ici -->
    <MenuProfil />
    <div class="container disp-flex">
      <!-- SIDEBAR LEFT -->
      <div class="sidebar-left">
        <div class="sidelist disp-flex">
          <nuxt-link to="/timeline">
            <img src="~/assets/svg/home.svg" alt="icon" class="icon">
            <button class="btn-none">Accueil</button>
          </nuxt-link>
        </div>
        <div class="sidelist disp-flex">
          <nuxt-link to="/audio">
            <img src="~/assets/svg/audio.svg" alt="icon" class="icon">
            <button class="btn-none">Mes audios</button>
          </nuxt-link>
        </div>
        <div class="sidelist disp-flex">
          <nuxt-link to="/profil">
            <img src="~/assets/svg/user.svg" alt="icon" class="icon">
            <button class="btn-none">Profil</button>
          </nuxt-link>
        </div>
        <div class="sidelist disp-flex">
          <nuxt-link to="/post">
            <img src="~/assets/svg/post.svg" alt="icon" class="icon">
            <button class="btn-none">Publier</button>
          </nuxt-link>
        </div>
        <div class="sidelist disp-flex" @click="logOut">
          <nuxt-link to="/login">
            <button class="btn-none">Se déconnecter</button>
          </nuxt-link>
        </div>
      </div>
      <!-- CONTENU PRINCIPAL -->
      <div class="user-contain">
        <div class="content-overlay" v-show="loading">
          <img src="~/assets/svg/oval.svg" alt="">
        </div>
        <div class="timeline-header">
          <h2>
            Fil d'Actualité
          </h2>
        </div>
        <!-- ALL POST -->
        <div class="story" v-for="(post, index) in allPost" :key="index">
          <div class="disp-flex usernav">
            <div  @click="saveId(post.userId._id)" class="circle mini-circle">
              <img :src="`http://localhost:5001/uploads/images/${post.userId.profilpic}`" alt="lambo">
            </div>
            <div class="identity">
              <p @click="saveId(post.userId._id)" class="post-username">{{ post.userId.profilname }}</p>
              <p @click="saveId(post.userId._id)" class="post-pseudo">@{{ post.userId.pseudo }}</p>
            </div>
          </div>
          <div class="post-comment">
            <p>{{ post.description }}</p>
          </div>
          <div class="audio" @mouseover="hover(index)">
            <div :class="`music-player-${index} music-player`">
              <div :class="`controls-${index} controls`">
                <div @click="playPause" :class="`play-pause-${index} play-pause`">
                  <img src="~/assets/svg/play.svg" alt="">
                </div>
              </div>
              <div @click="updateAudioPosition" :class="`progress-area-${index} progress-area`">
                <div :class="`progress-bar-${index} progress-bar`"></div>
                <div :class="`timer-${index} timer`">
                  <span :class="`current-${index} current`">0:00</span>
                  <span :class="`duration-${index} duration`"></span>
                </div>
                <audio @timeupdate="audioProgressBar" :class="`main-audio-${index} main-audio`" :src="`http://localhost:5001/uploads/audios/${post.audio}`"></audio>
              </div>
            </div>
          </div>
          <span class="like-btn" @click="likePost(post._id)">
            {{ post.likes.length }} <span class="heart">❤</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      loading: true,
      allPost: ''
    }
  },
  async mounted () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
    const userId = localStorage.getItem('userId')
    if (userId !== undefined) {
      // Fetch all post
      this.allPost = await axios.get('http://localhost:5001/api/timeline/post')
        .then((res) => {
          return res.data
        })
        .catch(function (err) {
          return err
        })
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    logOut () {
      localStorage.removeItem('userId')
      this.$router.push('/login')
    },
    // Like post
    async likePost (id) {
      const userId = localStorage.getItem('userId')
      if (userId) {
        const data = {
          userId: localStorage.getItem('userId')
        }
        await axios({ method: 'put', url: `http://localhost:5001/api/post/${id}/like`, data })
        // Fetch user post
        this.userPost = await axios.get(`http://localhost:5001/api/user/post/${data.userId}`)
          .then((res) => {
            return res.data
          })
          .catch(function (err) {
            return err
          })
      } else {
        return ''
      }
    },
    saveId (id) {
      localStorage.setItem('visitUserId', id)
      const visitUserId = localStorage.getItem('visitUserId')
      if (visitUserId) {
        this.$router.push('/user')
      } else {
        return ''
      }
    },
    // test to log index
    hover (index) {
      this.indexPost = index
      const audio = document.querySelector(`.main-audio-${this.indexPost}`)
      this.audio = audio
    },
    // play audio
    playMusic () {
      const musicPlayer = document.querySelector(`.music-player-${this.indexPost}`)
      // const audio = document.querySelector(`.main-audio-${this.indexPost}`)
      const playPauseBtn = document.querySelector(`.play-pause-${this.indexPost}`)
      musicPlayer.classList.add('paused')
      playPauseBtn.querySelector('img').src = '/icons/pause.svg'
      this.audio.play()
    },
    // pause audio
    pauseMusic () {
      const musicPlayer = document.querySelector(`.music-player-${this.indexPost}`)
      // const audio = document.querySelector(`#main-audio-${this.indexPost}`)
      const playPauseBtn = document.querySelector(`.play-pause-${this.indexPost}`)
      musicPlayer.classList.remove('paused')
      playPauseBtn.querySelector('img').src = '/icons/play.svg'
      this.audio.pause()
    },
    // Play - Pause button
    playPause () {
      const musicPlayer = document.querySelector(`.music-player-${this.indexPost}`)
      const isMusicPaused = musicPlayer.classList.contains('paused')
      isMusicPaused ? this.pauseMusic() : this.playMusic()
    },
    // Progress bar when audio is playing
    audioProgressBar (e) {
      const progress = document.querySelector(`.progress-bar-${this.indexPost}`)
      const currentTime = e.target.currentTime
      const duration = e.target.duration
      const progressWidth = (currentTime / duration) * 100
      progress.style.width = `${progressWidth}%`
      const musicDuration = document.querySelector(`.duration-${this.indexPost}`)
      const musicCurrentTime = document.querySelector(`.current-${this.indexPost}`)
      const totalMin = Math.floor(duration / 60)
      let totalSec = Math.floor(duration % 60)
      if (totalSec < 10) {
        totalSec = `0${totalSec}`
      }
      musicDuration.innerHTML = `${totalMin}:${totalSec}`
      const currentMin = Math.floor(currentTime / 60)
      let currentSec = Math.floor(currentTime % 60)
      if (currentSec < 10) {
        currentSec = `0${currentSec}`
      }
      musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`
    },
    // Update audio playing time
    updateAudioPosition (e) {
      const progressArea = document.querySelector(`.progress-area-${this.indexPost}`)
      // const audio = document.querySelector(`#main-audio-${this.indexPost}`)
      const progressWithVal = progressArea.clientWidth
      const clickedOffsetx = e.offsetX
      const songDuration = this.audio.duration
      this.audio.currentTime = (clickedOffsetx / progressWithVal) * songDuration
      this.playMusic()
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
}

.container{
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: "header header header header" "main main . sidebar" "footer footer footer footer"
}
/* .disp-flex{
  display: grid;
} */
/* SIDEBAR LEFT */

.sidebar-left{
  position: fixed;
  height: 100%;
  padding: 50px;
  z-index: 26;
  border-right: 1px solid #ddd;
  background: red;
}

.sidelist {
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  padding: 13px;
}

.sidelist a {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  box-shadow: 0px 13px 30px -20px rgba(0, 0, 0, 0.466);
  background: #202020;
  padding: 13px 20px;
  border-radius: 55px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  cursor: pointer;
}

.sidelist a:hover {
  background: linear-gradient(135deg, #42ACF2 0%,#B042F2 100%);
  box-shadow: 0px 13px 30px -15px rgba(0, 0, 0, 0.466);
  transition: .3s background ease-in-out;
}

.sidelist a button {
  background: none;
  color: white;
  outline: none;
  border: none;
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.icon {
  width: 21px;
}

.icon-edit-banner {
  position: absolute;
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon-edit-profilpic {
  position: absolute;
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  cursor: pointer;
}

.icon-edit-profilpic .icon {
  border-radius: 0;
}

/* CONTENU PRINCIPAL */
.user-contain {
  position: relative;
  width: 70%;
  height: 100vh;
  margin-left: 330px;
}

.content-overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
  background: white;
  z-index: 24;
  margin-left: -200px;
}

.content-overlay img {
  width: 35px;
}

.timeline-header {
  margin: 50px 0 70px 0px;
  padding: 0 0 20px 70px;
  border-bottom: 1px solid #dddddd;
}

.timeline-header h2 {
  font-size: 34px;
  color: #202020;
  text-transform: uppercase;
}

.story {
  width: 630px;
  margin: 0 0 0 70px;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dddddd;
}

.circle img {
  width: 60px;
  height: 60px;
  border: 2px solid #dddddd;
  box-shadow: 1px 1px 15px -10px rgba(194, 194, 194, 0.685);
  -webkit-box-shadow: 1px 1px 15px -15px rgba(194,194,194,0.6);
  -moz-box-shadow: 1px 1px 15px -15px rgba(194,194,194,0.6);
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  cursor: pointer;
}

.usernav {
  align-items: center;
  gap: 20px;
}

.post-username {
  font-size: 22px;
  font-weight: 500;
  margin-top: -5px;
  cursor: pointer;
}

.post-pseudo {
  margin-top: 6px;
  cursor: pointer;
}

.post-comment{
  margin: 18px 0;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.5rem;
}

/* MUSIC PLAYER */
.music-player {
  display: flex;
  align-items: center;
  width: 95%;
  height: 65px;
  border: 2.5px solid #42acf2bd;
  box-shadow: 0px 6px 30px -20px rgba(0, 0, 0, 0.301);
  border-radius: 10px;
  padding: 10px;
}

.progress-area {
  height: 5px;
  width: 100%;
  background: #e8e8e8;
  border-radius: 50px;
  margin-top: -8px;
  margin-left: 10px;
}

.progress-area .progress-bar {
  position: relative;
  height: inherit;
  width: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #42ACF2 0%,#B042F2 100%);
}

.progress-area .progress-bar::before {
  position: absolute;
  content: '';
  width: 12px;
  height: 12px;
  border-radius: inherit;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  background: inherit;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.progress-area:hover .progress-bar::before {
  opacity: 1;
}

.progress-area .timer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: dimgrey;
  margin-top: 8px;
}

.controls .play-pause img {
  user-select: none;
  width: 28px;
  cursor: pointer;
}

.like-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  margin-top: 20px;
  border-radius: 13px;
  padding: 5px;
  background: #42ACF2;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.like-btn .heart {
  margin-left: 8px;
}
</style>
