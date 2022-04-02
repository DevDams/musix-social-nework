<template>
  <div>
  <!-- commencer à coder ici -->
    <!-- PAGE DE CONNECTION -->
    <div class="content-global">
      <div class="login-contain">
        <div class="log-content">
          <div class="logo">
            <h1>
              <nuxt-link to="/">Sign</nuxt-link>
            </h1>
          </div>
          <h1> Connexion </h1>
          <form action="/user" method="POST" class="form">
            <div class="formcase">
                <input @focus="clear" v-model="email" type="text" name="email" placeholder="email">
            </div>
            <div class="formcase">
                <input @focus="clear" v-model="password" type="password" name="password" placeholder="Mot de passe">
            </div>
            <div class="error" v-show="error">
              <span>*email ou mot de passe incorrecte !</span>
            </div>
            <button @click="logIn" type="submit" class="btn btn-blue">Se connecter</button>
          </form>
          <div class="box-button">
            <p>Pas encore inscris ?</p>
            <span>-</span>
            <nuxt-link to="/signup">
              S'inscrire
            </nuxt-link>
          </div>
        </div>
        <div class="logo1">
          <img src="~/assets/images/people-working.png" alt="cover">
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
      email: '',
      password: '',
      error: false
    }
  },
  mounted () {
    const userId = localStorage.getItem('userId')
    if (userId) {
      this.$router.push('/profil')
    } else {
      return ''
    }
  },
  methods: {
    clear () {
      this.error = false
    },
    async logIn (e) {
      const data = {
        email: this.email,
        password: this.password
      }
      e.preventDefault()
      const out = await axios({ method: 'post', url: 'http://localhost:5001/api/auth/login', data })
      if (out.data._id !== undefined) {
        localStorage.setItem('userId', out.data._id)
        this.$router.push('/profil')
      } else {
        this.error = true
      }
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
.logo{
  font-size: 15px;
  position: absolute;
  top: 40px;
}
.logo1{
  width: 50%;
  height: 50%;
}
.logo img,.logo1 img {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}

.login-contain{
  position: relative;
  width: 50vw;
  height: 80vh;
  margin: 50px auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border:solid 1px black;
}
.log-content>h1{
  font-size:18px;
  line-height: 2;
}

.formcase {
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  margin: 25px 0;
}

.formcase input {
  border: none;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  outline-color: #1A91DA;
  background: none;
}

.formcase input::placeholder{
  font-size: 18px;
}

.box-button{
  text-align: center;
}

.box-button p, a {
  display: inline;
  color: #1A91DA;
}

.btn{
  width: 10vw;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

.btn-blue{
  border: none;
  color: white;
  background: linear-gradient(to right, #42ACF2,rgb(166, 164, 167));
  transition: .2s all ease-in-out;
}

.btn-blue:hover{
  background: linear-gradient(to left, #42ACF2,rgb(166, 164, 167));
  transition: .2s all ease-in-out;
}

.error {
  color: red;
  font-weight: 500;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 20px;
}
</style>
