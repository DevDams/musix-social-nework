<template>
  <div>
    <!-- Commencez à coder ici -->
    <div class="container disp-flex">
      <!-- SIDEBAR LEFT -->
      <div class="sidebar-left">
        <div class="sidelist disp-flex">
          <nuxt-link to="/timeline">
            <img src="~/assets/images/ficher.png" alt="icon" class="icon">
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
        <div class="profil-content">
          <div class="profil-cover">
            <img :src="`http://localhost:5001/uploads/images/${userData.banner}`" alt="story-cover" class="usercov">
          </div>
          <div class="circle big-circle">
            <img :src="`http://localhost:5001/uploads/images/${userData.profilpic}`" alt="user" class="user">
          </div>
          <div class="identity">
            <p class="username">{{ userData.profilname }}</p>
            <p class="pseudo">@{{ userData.pseudo }}</p>
          </div>
          <div class="descrip">
            <span>{{ userData.bio }}</span>
          </div>
        </div>
        <!-- USER POST -->
        <div class="story" v-for="(post, index) in userPost" :key="index">
          <div class="disp-flex usernav">
            <div class="circle mini-circle">
              <img :src="`http://localhost:5001/uploads/images/${userData.profilpic}`" alt="lambo">
            </div>
            <div class="identity">
              <p class="post-username">{{ userData.profilname }}</p>
              <p class="post-pseudo">@{{ userData.pseudo }}</p>
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
      userData: '',
      userPost: '',
      indexPost: '',
      audio: ''
    }
  },
  async mounted () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
    const visitUserId = localStorage.getItem('visitUserId')
    const userId = localStorage.getItem('userId')
    if (visitUserId === userId) {
      this.$router.push('/profil')
    }
    if (visitUserId !== undefined) {
      // Fetch user info
      this.userData = await axios.get(`http://localhost:5001/api/user/${visitUserId}`)
        .then((res) => {
          return res.data
        })
        .catch(function (err) {
          return err
        })
      // Fetch user post
      this.userPost = await axios.get(`http://localhost:5001/api/user/post/${visitUserId}`)
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
}

.disp-flex{
  display: flex;
}

/* SIDEBAR LEFT */

.sidebar-left{
  position: fixed;
  height: 100%;
  padding: 50px;
  border-right: 1px solid #ddd;
  z-index: 26;
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

.profil-content {
  width: 100%;
  text-align: center;
  padding: 10px;
  padding-bottom: 60px;
  border-bottom: 1px solid #dddddd;
}

.profil-cover {
  width: 100%;
  height: 250px;
}

.usercov {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.circle {
  border: 2px solid white;
  box-shadow: 1px 1px 15px -15px rgba(194,194,194,0.6);
  -webkit-box-shadow: 1px 1px 15px -15px rgba(194,194,194,0.6);
  -moz-box-shadow: 1px 1px 15px -15px rgba(194,194,194,0.6);
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.big-circle {
  width: 150px;
  height: 150px;
  position: relative;
  margin: -80px auto 20px;
  box-shadow: 1px 1px 15px 1px rgba(194,194,194,0.6);
  -webkit-box-shadow: 1px 1px 15px 1px rgba(194,194,194,0.6);
  -moz-box-shadow: 1px 1px 15px 1px rgba(194,194,194,0.6);
}

.circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

.identity .username {
  font-size: 26px;
  font-weight: 700;
}

.identity .pseudo {
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
}

.descrip {
  max-width: 500px;
  margin: 20px auto;
  font-weight: 200;
}

.post-username {
  font-size: 22px;
  font-weight: 500;
  margin-top: -5px;
}

.post-pseudo {
  margin-top: 6px;
}

.post-comment{
  margin: 18px 0;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.5rem;
}

.story {
  width: 630px;
  margin: auto;
  padding: 0 20px;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #dddddd;
}

.mini-circle {
  width: 50px;
  height: 50px;
}

.box-button {
  margin-top: 20px;
}

.btn {
  font-size: 16px;
  background-color: #42ACF2;
  cursor: pointer;
  border: none;
  padding: 12px 32px;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  color: white;
}

.btn:hover {
  background: linear-gradient(90deg, #42ACF2,#B042F2);
  transition: .8s;
  -webkit-transition: .8s;
  -moz-transition: .8s;
  -ms-transition: .8s;
  -o-transition: .8s;
}

.usernav {
  align-items: center;
  gap: 20px;
}

.story-cover img {
  width: 100%;
  border-radius: 13px;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  -ms-border-radius: 13px;
  -o-border-radius: 13px;
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
