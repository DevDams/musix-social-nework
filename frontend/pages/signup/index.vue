<template>
  <div>
    <Navbar/>
    <!-- commencer à coder ici -->
    <!-- PAGE D'ACCUEIL -->
    <div class="home-content">
      <div class="home-left">
          <img src="~/assets/svg/task.svg" alt="cover">
      </div>
      <div class="home-right">
        <h1>lorem ipsum dolor</h1>
        <h2>Lorem ipsum dolor sit amet consectetur </h2>
        <div class="box-button">
          <nuxt-link to="/">
            <button class="btn btn-blue">Bienvenue</button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- FORMULAIRE D'INSCRIPTION -->
    <div class="form-overlay">
      <div class="form-content" v-if="signup_form">
        <h1>S'inscrire </h1>
        <form action="/login" method="POST" class="form">
          <div class="case-box">
              <input v-model="name" type="text" name="name" placeholder="Nom" autocomplete="off">
          </div>
          <div class="case-box">
              <input v-model="prenom" type="text" name="name" placeholder="Prénom" autocomplete="off">
          </div>
          <div class="case-box">
              <input v-model="telephone" type="number" name="telephone" placeholder="Téléphone" autocomplete="off">
          </div>
          <div class="case-box">
              <input
              v-model="email"
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="off"
              required>
          </div>
          <div class="case-box">
              <input v-model="password" type="password" name="password" placeholder="Mot de passe">
          </div>
          <div class="case-box">
              <input v-model="confirmPassword" type="password" name="confirmPassword" placeholder="Confirmer mot de passe">
          </div>
          <button @click="signUp" type="submit" class="btn btn-blue">S'inscrire</button>
        </form>
        <div class="login-link">
          <span>Déjà inscrit ?</span>
          <span class="tiret">-</span>
          <nuxt-link to="/login">
              Se connecter
          </nuxt-link>
        </div>
      </div>
      <!-- SUCCESS MODAL -->
      <div class="success-modal error-password" v-show="signup_password">
        <p>
          Oups les mots de passe ne correspondent pas. Veillez rééssayer s'il vous plait !
        </p>
        <button @click="errorPassword">
          Modifier
        </button>
      </div>
      <!-- SUCCESS MODAL -->
      <div class="success-modal" v-show="signup_success">
        <p>
          Inscription terminé. Veillez vous connecter s'il vous plait !
        </p>
        <nuxt-link to="/login">
          <button>
            Se connecter
          </button>
        </nuxt-link>
      </div>
      <!-- ECHEC MODAL -->
      <div class="success-modal" v-show="signup_error">
        <p>
          Oups quelque chose s'est mal passé. Veillez rééssayer s'il vous plait !
        </p>
        <button @click="hideError" style="margin-top: 15px;">
          Rééssayer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      prenom: '',
      telephone: '',
      email: '',
      password: '',
      confirmPassword: '',
      signup_form: true,
      signup_password: false,
      signup_success: false,
      signup_error: false
    }
  },
  mounted () {
    const userId = localStorage.getItem('userId')
    if (userId) {
      this.$router.push('/user')
    } else {
      return ''
    }
  },
  methods: {
    async signUp (e) {
      e.preventDefault()
      const data = {
        name: this.name,
        prenom: this.prenom,
        telephone: this.telephone,
        email: this.email,
        password: this.password
      }
      if (this.handleMatchPassword({ password: this.password, confirmPassword: this.confirmPassword }).success) {
        const out = await axios({ method: 'post', url: 'http://localhost:5001/api/auth/signup', data })
        if (out) {
          this.signup_success = true
          this.signup_form = false
        } else {
          this.signup_error = true
          this.signup_form = false
        }
        this.name = ''
        this.prenom = ''
        this.telephone = ''
        this.email = ''
        this.password = ''
        this.confirmPassword = ''
      } else {
        this.signup_password = true
      }
    },
    handleMatchPassword ({ password, confirmPassword }) {
      if (password === confirmPassword) {
        return { success: true }
      } else {
        return { success: false, message: 'Les mots de passe ne sont pas identiques.' }
      }
    },
    hideError () {
      this.signup_error = false
    },
    errorPassword () {
      this.signup_password = false
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

/* PAGE D'ACCUEIL */
.home-content {
  display: flex;
  align-items: center;
}
.logo{
  width: 50px;
  height: 50px;
  position: absolute;
  top: 5px;
}
.logo img {
  width: 100%;
  height: 100%;
}

.home-left {
  background: linear-gradient( #42ACF2,rgb(249, 247, 250));
  width: 50%;
  height: 100vh;
}

.home-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-right {
  padding: 0 40px;
  width: 50%;
}

.home-right img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.home-right h1 {
  font-weight: 600;
  font-size: 10px;
  padding: 30px 0;
}

.home-right h2 {
  font-size: 20px;
  padding-bottom: 40px;
  font-weight: 400;
}

.box-button {
  width: 300px;
}

.btn {
  width: 100%;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  padding: 13px;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.btn-blue {
  border: none;
  color: white;
  background: linear-gradient(to right, #42ACF2,rgb(166, 164, 167));
}

.btn-blue:hover{
  background: linear-gradient(to left, #42ACF2,rgb(25, 41, 70));
  transition: .2s all ease-in-out;
}
.btn-light{
  border: 1px solid #42ACF2;
  color: #42ACF2;
  background-color: transparent;
}

.btn-light:hover{
  background-color: #3bb4ff54;
}

/* FORMULAIRE D'INSCRIPTION */
.form-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.form-content{
  max-width: 500px;
  padding: 20px 50px;
  background-color: #fff;
  z-index: 12;
  text-align: center;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
}

.case-box {
  border: 1px solid gray;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  margin: 15px 0;
  width: 400px;
}

.case-box input {
  background: none;
  outline-color: #1a83c4;
  border: none;
  width: 100%;
  padding: 15px;
  font-size: 18px;
}

.case-box input::placeholder{
  font-size: 18px;
}

.login-link {
  color: #1a83c4;
  margin-top: 20px;
}

.login-link .tiret {
  color: #000;
}

.login-link a {
  color: #1a83c4;
}

.success-modal {
  background-color: white;
  z-index: 12;
  width: 400px;
  height: 200px;
  padding: 10px;
  text-align: center;
  border-radius: 13px;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  -ms-border-radius: 13px;
  -o-border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.success-modal p {
  font-size: 21px;
}

.success-modal button {
  outline: none;
  border: none;
  background-color: #42ACF2;
  color: white;
  padding: 10px 15px;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  cursor: pointer;
}

.success-modal a {
  color: white;
  margin-top: 20px;
  cursor: pointer;
}

.error-password {
  position: absolute;
  border: 2px solid black;
}
</style>
