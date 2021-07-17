<template>
  <div>
  <!-- commencer à coder ici -->
    <!-- PAGE D'INSCRIPTION -->
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

        <!-- FORMULAIRE D'INSCRIPTION -->
        <div class="form-content">
           <h1>S'inscrire</h1>
           <form action="#" class="form">
                <div class="case-box">
                   <input type="text" placeholder="Nom et Prénom">
                </div>
                <div class="case-box">
                   <input type="number" placeholder="Téléphone">
                </div>
                <div class="case-box">
                   <input type="email" placeholder="Email" required>
                </div>
                <div class="case-box">
                   <input type="date">
                </div>
                <div class="case-box">
                   <input type="text" placeholder="Nom d'utilisateur">
                </div>
                <div class="case-box">
                   <input type="password" placeholder="Mot de passe">
                </div>
                <div class="case-box">
                   <input type="password" placeholder="Confirmer mot de passe">
                </div>
           </form>
           <div class="box-button case-button">
                <nuxt-link to="/signup">
                    <button class="btn btn-blue">S'inscrire</button>
                </nuxt-link>
           </div>
           <span>Déjà inscrit ?</span>
           <a href="#">Se connecter</a>
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
    background: linear-gradient(to left, rgba(0, 0, 0, 0.397), rgba(0, 0, 0, 0.397));
    opacity: 0.7;
    filter: blur(3px);
    -webkit-filter: blur(3px);
    position: relative;
}

.home-left {
    background: linear-gradient( #42ACF2,#B042F2);
    width: 45%;
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

/* FORMULAIRE D'INSCRIPTION */
.form-content{
    max-width: 500px;
    padding: 10px 50px;
    margin:-48% auto 0;
    left: 35%;
    background-color: #fff;
    position: absolute;
    z-index: 1;
    text-align: center;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}

.case-box{
    border: 1px solid gray;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    margin: 15px 0;
    width: 400px;
}

.case-box input{
    outline-color: #1a83c4;
    border: none;
    width: 100%;
    padding: 15px;
    font-size: 18px;
}

.case-box input::placeholder{
    font-size: 18px;
}

.case-button{
    width: 100%;
    margin-bottom: 10px;
}
</style>
