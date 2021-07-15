<template>
  <div>
  <!-- commencer à coder ici -->
    <!-- PAGE D'ACCUEIL -->
    <div class="home-content">
        <div class="home-left">
            <img src="img/cover.png" alt="cover">
        </div>
        <div class="home-right">
            <img src="img/music-logo.png" alt="music-logo">
            <h1>Welcome to the wonder wonderland</h1>
            <h2>Rejoignez nous dès aujourd'hui.</h2>
            <div class="box-button">
                <a href="signup.html">
                    <button class="btn btn-blue">S'inscrire</button>
                </a>
                <a href="login.html">
                    <button class="btn btn-light">Se connecter</button>
                </a>
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

/* PAGE D'ACCUEIL */
.home-content{
    display: flex;
    align-items: center;
}

.home-left{
    background: linear-gradient( #42ACF2,#B042F2);
    padding: 50px;
    width: 50%;
    height: 100vh;
}

.home-left img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.logo{
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.home-right{
    padding: 0 20px;
    width: 50%;
}

.home-right img{
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.home-right h1{
    font-weight: 400;
    font-size: 70px;
    padding: 30px 0;
}

.home-right h2{
    padding-bottom: 20px;
    font-weight: 300;
}

.box-button{
    width: 300px;
}

.btn{
    width: 100%;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
    padding: 10px;
    margin: 5px 0;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
}

.btn-blue{
    border: none;
    color: white;
    background-color: #1A91DA;
}

.btn-blue:hover{
    background-color: #1a83c4;
}

.btn-light{
    border: 1px solid #1A91DA;
    color: #1A91DA;
    background-color: transparent;
}

.btn-light:hover{
    background-color: #3bb4ff77;
}

</style>
