<template>
  <div>
  <!-- commencer à coder ici -->
    <!-- PAGE DE CONNECTION -->
    <div class="login-contain">
      <div class="logo">
          <img src="~/assets/images/logo.png">
      </div>
      <div class="log-content">
        <h1>Se connecter</h1>
        <form action="/user" method="POST" class="form">
          <div class="formcase">
              <input v-model="pseudo" type="text" name="pseudo" placeholder="Téléphone, email ou non d'utilisateur">
          </div>
          <div class="formcase">
              <input v-model="password" type="password" name="password" placeholder="Mot de passe">
          </div>
          <button @click="logIn" type="submit" class="btn btn-blue">Se connecter</button>
        </form>
        <div class="box-button">
          <p>Mot de passe oublié ?</p>
          <span>-</span>
          <nuxt-link to="/signup">
            S'inscrire
          </nuxt-link>
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
      pseudo: '',
      password: ''
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
    async logIn (e) {
      const data = {
        pseudo: this.pseudo,
        password: this.password
      }
      e.preventDefault()
      const out = await axios({ method: 'post', url: 'http://localhost:5001/api/auth/login', data })
      localStorage.setItem('userId', out.data._id)
      if (out) {
        this.$router.push('/user')
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
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: 50%;
  margin: 20px 0px;
  margin-right: 140px;
}

.logo img {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}

.login-contain{
  max-width: 350px;
  margin: 100px auto;
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
  padding: 15px;
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
  width: 100%;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  padding: 13px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.btn-blue{
  border: none;
  color: white;
  background: linear-gradient(to right, #42ACF2,#B042F2);
  transition: .2s all ease-in-out;
}

.btn-blue:hover{
  background: linear-gradient(to left, #42ACF2,#B042F2);
  transition: .2s all ease-in-out;
}
</style>
