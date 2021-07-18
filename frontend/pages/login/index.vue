<template>
  <div>
  <!-- commencer à coder ici -->
    <!-- PAGE DE CONNECTION -->
    <div class="login-contain">
        <div class="log-content">
            <h1>Se connecter</h1>
            <form action="#" class="form">
                <div class="formcase">
                    <input type="text" placeholder="Téléphone, email ou non d'utilisateur">
                </div>
                <div class="formcase">
                    <input type="text" placeholder="Mot de passe">
                </div>
                <button type="submit" class="btn btn-blue">Se connecter</button>
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
export default {}
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

.login-contain{
  max-width: 350px;
  margin: 70px auto;
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
