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
      <div class="post-side">
        <div class="post-header">
          <h2>Ajouter un nouvel audio...</h2>
        </div>
        <div class="post-form">
          <div class="form">
            <form action="/" method="POST">
              <div class="label">
                <span>Dites quelques choses à propos</span>
                <input v-model="description" type="text" name="description" autocomplete="off">
              </div>
              <div class="label">
                <span>Choisissez un audio</span>
                <input @change="processFile($event)" type="file" name="audio" id="audio">
              </div>
              <button type="submit" @click="postAudio">
                Ajouter
              </button>
            </form>
          </div>
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
      description: '',
      audio: ''
    }
  },
  mounted () {
    const userId = localStorage.getItem('userId')
    if (userId) {
      console.log('User logged')
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    logOut () {
      localStorage.removeItem('userId')
      this.$router.push('/login')
    },
    processFile (event) {
      this.audio = event.target.files[0]
    },
    async postAudio (e) {
      e.preventDefault()
      const userId = localStorage.getItem('userId')
      const file = this.audio
      const formData = new FormData()
      formData.append('file', file)
      formData.append('userId', userId)
      formData.append('description', this.description)
      const sendData = await axios({ method: 'post', url: 'http://localhost:5001/api/post', data: formData, headers: { 'Content-Type': 'multipart/form-data' } })
      console.log(sendData)
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
  background: #f0f0f0;
  box-shadow: 0px 13px 30px -15px rgba(0, 0, 0, 0.466);
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
  color: white;
  background-color: rgb(19, 19, 19);
  box-shadow: 0px 13px 30px -15px rgba(0, 0, 0, 0.466);
  padding: 13px 20px;
  border-radius: 55px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  cursor: pointer;
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

.post-side {
  width: 70%;
  margin-left: 330px;
  text-align: center;
}

.post-header {
  margin-top: 70px;
}

.post-header h2 {
  font-size: 34px;
}

.post-form {
  width: 100%;
}

.form {
  width: 400px;
  height: 400px;
  margin: 100px auto 0;
  border: 1px solid gray;
  border-radius: 13px;
  background: white;
}

form {
  width: 100%;
  height: 100%;
  padding: 20px 15px 15px;
  text-align: left !important;
  box-shadow: 0px 13px 30px -20px rgba(0, 0, 0, 0.466);
}

form .label {
  display: flex;
  flex-direction: column;
  height: 90px;
  margin-top: 30px;
}

form .label span {
  font-size: 18px;
}

form .label input {
  background: none;
  height: 65px;
  margin-top: 10px;
  outline-color: #1a83c4;
  border: 1px solid rgba(128, 128, 128, 0.541);
  border-radius: 5px;
  background: white;
  font-size: 17px;
  padding-left: 10px;
  color: #303030;
}

form button {
  margin-top: 40px;
  font-size: 16px;
  width: 100%;
  height: 40px;
  border-radius: 30px;
  font-weight: 800;
  background: linear-gradient(90deg, #42ACF2,#B042F2);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0px 13px 30px -15px rgba(0, 0, 0, 0.466);
}
</style>
