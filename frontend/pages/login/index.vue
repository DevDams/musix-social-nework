<template>
  <div>
  <!-- commencer à coder ici -->
    <!-- PAGE DE CONNECTION -->
      <div class="login-contain">
          <div class="log-content">
              <img src="../img/music-logo.png" alt="music-logo" class="logo">
              <h1>Se connecter</h1>
              <form action="#" class="form">
                  <div class="formcase">
                      <input type="text" placeholder="Téléphone, email ou non d'utilisateur">
                  </div>
                  <div class="formcase">
                      <input type="text" placeholder="Mot de passe">
                  </div>
              </form>
              <div class="box-button">
                  <a href="#">
                      <button class="btn btn-blue">Se connecter</button>
                  </a>
                  <a href="#">Mot de passe oublié ?</a>
                  <span>-</span>
                  <a href="#">S'inscrire</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a{
  text-decoration: none;
}

.login-contain{
  max-width: 350px;
  margin: 20px auto;
}

.logo{
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.formcase{
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  margin: 25px 0;
}

.formcase input{
  border: none;
  font-size: 18px;
  width: 100%;
  padding: 15px;
  outline-color: #1A91DA;
}

.formcase input::placeholder{
  font-size: 18px;
}

.box-button{
  text-align: center;
}

.btn{
  width: 100%;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

.btn-blue{
  border: none;
  color: white;
  background: linear-gradient(to right, #42ACF2,#B042F2);
}

.btn-blue:hover{
  background: linear-gradient(to left, #42ACF2,#B042F2);
}
</style>
