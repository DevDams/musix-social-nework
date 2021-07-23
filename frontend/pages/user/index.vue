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
      <!-- CONTENU PRINCIPAL -->
      <div class="user-contain">
        <div class="profil-content">
          <div class="profil-cover">
            <div class="edit-banner">
              <img src="~/assets/svg/edit.svg" alt="icon" class="icon">
            </div>
            <img :src="userData.banner" alt="story-cover" class="usercov">
          </div>
          <div class="circle big-circle">
            <div class="edit-profilpic">
              <img src="~/assets/svg/edit.svg" alt="icon" class="icon">
            </div>
            <img :src="userData.profilpic" alt="user" class="user">
          </div>
          <div class="identity">
            <p class="username">{{ userData.profilname }}</p>
            <p class="pseudo">{{ userData.pseudo }}</p>
          </div>
          <div class="descrip">
            <span>{{ userData.bio }}</span>
          </div>
          <div class="box-button">
            <button class="btn" @click="updateForm">Editer profil</button>
          </div>
        </div>
        <!-- EDIT PROFIL -->
        <div class="edit-form" v-show="showUpdateForm">
          <div class="update-profil">
            <div class="header">
              <button @click="updateForm">
                <img src="~/assets/svg/close-btn.svg" alt="icon" class="icon">
              </button>
              <h2>Modifier le profil</h2>
            </div>
            <form action="/user" method="POST">
              <div class="label">
                <span>Nom de profil</span>
                <input v-model="username" type="text" name="username" autocomplete="off">
              </div>
              <div class="label">
                <span>Pseudo</span>
                <input v-model="pseudo" type="text" name="pseudo" autocomplete="off">
              </div>
              <div class="label">
                <span>Biograghie</span>
                <input v-model="bio" type="text" name="bio" autocomplete="off">
              </div>
              <button type="submit" @click="updateUserInfo">
                Modifier
              </button>
            </form>
          </div>
        </div>
        <!-- USER POST -->
        <div class="story">
          <div class="disp-flex usernav">
            <div class="circle mini-circle">
              <img src="https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c" alt="lambo">
            </div>
            <div class="identity">
              <p class="post-username">{{ userData.profilname }}</p>
              <p class="post-pseudo">@{{ userData.pseudo }}</p>
            </div>
          </div>
          <div class="post-comment">
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div class="audio">
            <audio src="audio.wav" preload="auto" controls></audio>
          </div>
        </div>
        <div class="story">
          <div class="disp-flex usernav">
            <div class="circle mini-circle">
              <img src="https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c" alt="lambo">
            </div>
            <div class="identity">
              <p class="post-username">Lorem ipsum.</p>
              <p class="post-pseudo">@lorem123</p>
            </div>
          </div>
          <div class="post-comment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime vero beatae facere corporis ut provident qui laboriosam eaque totam accusantium cumque, sit dolore molestias, odio libero tempora veritatis nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a dolor cupiditate excepturi illum vitae. Est assumenda labore aut reiciendis veniam doloribus? Quidem dolorum vitae nisi temporibus excepturi, molestiae quo?
            </p>
          </div>
          <div class="story-cover">
            <img src="https://img-4.linternaute.com/Pb072YlIGB6w9EHFmJ3WI1NWbtE=/660x366/smart/686c7440c6f1419996abe4af9cb6f70a/ccmcms-linternaute/11101673.jpg" alt="story cover">
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

/* CONTENU PRINCIPAL */
.user-contain {
  border-left: 1px solid #e2e2e2;
  width: 70%;
}

.profil-content {
  width: 100%;
  text-align: center;
  padding: 20px;
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
  font-size: 21px;
  font-weight: 500;
}

.post-comment{
  margin: 20px 0;
  font-weight: 200;
  line-height: 1.5rem;
}

.story {
  width: 630px;
  margin: auto;
  padding: 0 20px;
  margin-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid #dddddd;
}

.mini-circle {
  width: 60px;
  height: 60px;
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

audio {
  width: 100%;
  background-color: #f2f3f4;
  border-radius: 13px;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  -ms-border-radius: 13px;
  -o-border-radius: 13px;
}
</style>
