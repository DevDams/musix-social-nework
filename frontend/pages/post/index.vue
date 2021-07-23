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
      <div class="post-form">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userData: '',
      showUpdateForm: false,
      username: '',
      pseudo: '',
      bio: '',
      modifResponse: ''
    }
  },
  async mounted () {
    const userId = localStorage.getItem('userId')
    if (userId) {
      this.userData = await axios.get(`http://localhost:5001/api/user/${userId}`)
        .then((res) => {
          return res.data
        })
        .catch(function (err) {
          return err
        })
      console.log(this.userData)
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    logOut () {
      localStorage.removeItem('userId')
      this.$router.push('/login')
    },
    updateForm () {
      this.showUpdateForm = !this.showUpdateForm
    },
    processFile (event) {
      this.bannerModel = event.target.files[0]
      console.log(this.bannerModel)
    },
    async updateUserInfo () {
      const userId = localStorage.getItem('userId')
      const data = {
        id: userId,
        username: this.username,
        pseudo: this.pseudo,
        bio: this.bio
      }
      const sendData = await axios({ method: 'post', url: 'http://localhost:5001/api/user/update', data })
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
  height: 100vh;
  padding: 50px;
  background: #eaeaeab4;
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

.edit-banner {
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

.edit-profilpic {
  position: absolute;
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  cursor: pointer;
}

.edit-profilpic .icon {
  border-radius: 0;
}

/* UPDATE USER */
.edit-form {
  background: rgba(0, 0, 0, 0.13);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 24;
}

.update-profil {
  position: absolute;
  width: 500px;
  height: 560px;
  background: white;
  border: 1px solid rgb(209, 209, 209);
  border-radius: 13px;
  box-shadow: 0px 13px 30px -15px rgba(0, 0, 0, 0.466);
  z-index: 24;
}

.update-profil .header {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.update-profil .header button {
  position: absolute;
  left: 10px;
  top: -10px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #42ACF2;
  outline: none;
  border: none;
  box-shadow: 0px 13px 30px -15px rgba(0, 0, 0, 0.466);
  border-radius: 50%;
  cursor: pointer;
}

.update-profil .header button img {
  width: 35px;
}

.update-profil form {
  width: 75%;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
}

.update-profil form .label {
  display: flex;
  flex-direction: column;
  height: 85px;
  margin-top: 10px;
}

.update-profil form .label-img {
  height: 60px;
}

.update-profil form .label-img input {
  border: none !important;
  border-radius: 0 !important;
}

.update-profil form .label span {
  font-size: 16px;
  font-weight: 700;
}

.update-profil form .label input {
  background: none;
  height: 65px;
  margin-top: 10px;
  outline-color: #1a83c4;
  border: 2px solid rgba(128, 128, 128, 0.541);
  border-radius: 5px;
  background: white;
  font-size: 17px;
  padding-left: 10px;
  color: #303030;
}

.update-profil form button {
  margin-top: 40px;
  font-size: 16px;
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
