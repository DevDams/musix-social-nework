<template>
  <div>
    <!-- Commencez à coder ici -->
    <div class="container disp-flex">
      <!-- SIDEBAR LEFT -->
      <div class="sidebar-left">
        <div class="sidelist disp-flex">
          <nuxt-link to="/home">
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
          <nuxt-link to="/user">
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
      <!-- USER POST -->
      <div class="story" v-for="(post, index) in allPost" :key="index">
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
</template>

<script>
export default {
  datat () {
    return {
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
  }
}
</script>

<style scoped>
</style>
