<template>
  <div>
    <!-- Commencez à coder ici -->
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
      <div class="post-side">
        <div class="post-header">
          <h2>Ajouter un nouvel audio...</h2>
        </div>
        <div class="post-form" v-show="post">
          <div class="form">
            <form action="/" method="POST">
              <div class="label">
                <span>Dites quelques choses à propos</span>
                <input v-model="description" type="text" name="description" autocomplete="off">
              </div>
              <div class="drag-area">
                <div class="download-icon">
                  <img src="~/assets/svg/download.svg" alt="download">
                </div>
                <span class="choose-file-name">Aucun fichier choisi...</span>
                <button @click="chooseAudio" class="choose-btn">Choisir un fichier</button>
                <input @change="processFile($event)" type="file" name="audio" id="audio" hidden>
              </div>
              <span class="alert" v-show="alert">*Veillez choisir un fichier audio...</span>
              <button class="submit" type="submit" @click="postAudio">
                Ajouter
              </button>
            </form>
          </div>
        </div>
        <div class="success-post" v-show="message">
          <div class="success" v-show="success">
            <p>
              Audio ajouté avec succes !
            </p>
            <button @click="postOk">Compris</button>
            <button>
              <nuxt-link to="/audio">Aller à mes audios</nuxt-link>
            </button>
          </div>
          <div class="fail" v-show="fail">
            <p>
              Oups... Quelque chose s'est mal passé, rééssayez !
            </p>
            <button @click="postOk">Compris</button>
            <button>
              <nuxt-link to="/audio">Aller à mes audios</nuxt-link>
            </button>
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
      audio: '',
      alert: false,
      post: true,
      success: false,
      fail: false,
      message: false
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
      const file = document.querySelector('.choose-file-name')
      this.audio = event.target.files[0]
      console.log('bonjour', this.audio)
      if (this.audio === '') {
        file.innerHTML = 'Aucun fichier choisi...'
      } else if (this.audio === undefined) {
        file.innerHTML = 'Aucun fichier choisi...'
      } else if (this.audio !== '') {
        this.alert = false
        file.innerHTML = this.audio.name
      } else if (this.audio !== undefined) {
        this.alert = false
        file.innerHTML = this.audio.name
      }
    },
    chooseAudio (e) {
      e.preventDefault()
      const audioInput = document.querySelector('#audio')
      audioInput.click()
    },
    async postAudio (e) {
      if (this.audio === '' || this.audio === undefined) {
        this.alert = true
      }
      e.preventDefault()
      const userId = localStorage.getItem('userId')
      const file = this.audio
      const formData = new FormData()
      formData.append('file', file)
      formData.append('userId', userId)
      formData.append('description', this.description)
      const sendData = await axios({ method: 'post', url: 'http://localhost:5001/api/post', data: formData, headers: { 'Content-Type': 'multipart/form-data' } })
      console.log(sendData.data)
      if (sendData) {
        this.message = true
        this.success = true
        this.post = false
      }
    },
    postOk () {
      this.description = ''
      this.audio = ''
      this.message = false
      this.success = false
      this.post = true
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

/* RIGHT CONTENT */

.post-side {
  position: relative;
  width: 70%;
  height: 100vh;
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
  height: 440px;
  margin: 100px auto 0;
  border: 2px solid rgba(128, 128, 128, 0.329);
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
  font-weight: 500;
  color: #202020;
}

form .label input {
  background: none;
  height: 55px;
  margin-top: 10px;
  outline-color: #42ACF2;
  border: 2px solid rgba(128, 128, 128, 0.363);
  border-radius: 5px;
  background: white;
  font-size: 17px;
  padding-left: 10px;
  color: #303030;
}

form button.submit {
  margin-top: 20px;
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

form span.alert {
  display: inline-block;
  padding-top: 20px;
  color: red;
}

form .drag-area {
  border: 2px dashed #303030;
  width: 100%;
  height: 170px;
  margin-top: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form .drag-area .download-icon img {
  width: 35px;
}

form .drag-area span {
  font-size: 21px;
  margin-top: 10px;
  text-align: center;
}

form .drag-area button {
  margin-top: 10px;
  padding: 10px 25px;
  font-weight: 400;
  border: none;
  outline: none;
  background: #303030;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.success-post {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success {
  position: absolute;
  top: 35%;
  border: 1px solid rgba(0, 0, 0, 0.37);
  border-radius: 13px;
  background: white;
  width: 370px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 13px 30px -15px rgba(0, 0, 0, 0.466);
}

.success p {
  font-size: 19px;
  margin-bottom: 10px;
}

.success button {
  border: none;
  outline: none;
  background: #42ACF2;
  color: white;
  padding: 10px 15px;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
}

.success button a {
  color: white;
}
</style>
