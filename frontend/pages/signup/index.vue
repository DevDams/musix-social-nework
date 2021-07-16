<template>
  <div>
  <!-- commencer à coder ici -->
    <!-- PAGE D'ACCUEIL -->
    <div class="home-content">
        <div class="home-left">
            <img src="~/assets/images/intro-cover-1.jpeg" alt="cover">
        </div>
        <div class="home-right">
            <h1>Enregistrez et partagez vos musique maintenant</h1>
            <h2>Rejoignez nous dès aujourd'hui.</h2>
            <div class="box-button">
              <nuxt-link to="/signup">
                <button class="btn btn-blue">S'inscrire</button>
              </nuxt-link>
              <nuxt-link to="/login">
                <button class="btn btn-light">Se connecter</button>
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

/* PAGE D'ACCUEIL */
.home-content {
  display: flex;
  align-items: center;
}

.home-left {
  background: linear-gradient( #42ACF2,#B042F2);
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
  font-weight: 800;
  font-size: 70px;
  padding: 30px 0;
}

.home-right h2 {
  font-size: 34px;
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
  background: linear-gradient(90deg, #42ACF2,#B042F2);
}

.btn-blue:hover {
  background-color: #1a83c4;
}

.btn-light{
  border: 1px solid #42ACF2;
  color: #42ACF2;
  background-color: transparent;
}

.btn-light:hover{
  background-color: #3bb4ff54;
}
</style>
