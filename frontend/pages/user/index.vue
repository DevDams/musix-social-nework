<template>
  <div>
    <!-- Commencez à coder ici -->
    <div class="container disp-flex">
      <!-- SIDEBAR LEFT -->
      <div class="sidebar-left">
          <div class="sidelist disp-flex">
              <img src="img/homepage.svg" alt="icon" class="icon">
              <a href="#">
                  <button class="btn-none">Accueil</button>
              </a>
          </div>
          <div class="sidelist disp-flex">
              <img src="img/listening.svg" alt="icon" class="icon">
              <a href="#">
                  <button class="btn-none">Mes audios</button>
              </a>
          </div>
          <div class="sidelist disp-flex">
              <img src="img/user-profile.svg" alt="icon" class="icon">
              <a href="#">
                  <button class="btn-none">Profil</button>
              </a>
          </div>
          <div class="sidelist disp-flex">
              <img src="img/paper-plane.svg" alt="icon" class="icon">
              <a href="#">
                  <button class="btn-none">Publier</button>
              </a>
          </div>
      </div>

      <!-- CONTENU PRINCIPAL -->
      <div class="user-contain">
          <div class="profil-content">
              <div class="profil-cover">
                  <img src="img/story-cover.jpeg" alt="story-cover" class="usercov">
              </div>
              <div class="circle big-circle">
                  <img src="img/user.jpeg" alt="user" class="user">
              </div>
              <div class="identity">
                  <p class="username">Lorem ipsum dolor sit amet.</p>
                  <p class="pseudo">@lorem123</p>
              </div>
              <div class="descrip">
                  <span>
                      Sed porttitor lectus nibh. Vestibulum ante ipsum 
                      primis in faucibus orci luctus et ultrices posuere.
                  </span>
              </div>
              <div class="box-button">
                  <a href="#">
                      <button class="btn">Editer profil</button>
                  </a>
              </div>
          </div>
          <div class="story">
              <div class="disp-flex usernav">
                  <div class="circle mini-circle">
                      <img src="img/lambo.jpeg" alt="lambo">
                  </div>
                  <div class="identity">
                      <p class="username">Lorem ipsum.</p>
                      <p class="pseudo">@lorem123</p>
                  </div>
              </div>
              <div class="comment">
                  <p>
                      Curabitur arcu erat, accumsan id imperdiet et, 
                      porttitor at sem. Donec sollicitudin molestie 
                      malesuada. Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit.
                  </p>
              </div>
              <div class="audio">
                  <audio src="audio.wav" preload="auto" controls></audio>
              </div>
          </div>
          <div class="story">
              <div class="disp-flex usernav">
                  <div class="circle mini-circle">
                      <img src="img/lambo.jpeg" alt="lambo">
                  </div>
                  <div class="identity">
                      <p class="username">Lorem ipsum.</p>
                      <p class="pseudo">@lorem123</p>
                  </div>
              </div>
              <div class="comment">
                  <p>
                      Vestibulum ante ipsum primis in faucibus 
                      orci luctus et ultrices posuere cubilia Curae; 
                      velit neque, auctor sit amet aliquam vel, 
                      ullamcorper sit amet ligula. Nulla porttitor 
                      accumsan tincidunt. Curabitur non nulla sit 
                      amet nisl tempus convallis quis ac lectus. 
                      Vestibulum ac diam sit amet quam vehicula 
                      elementum sed sit amet dui. Nulla porttitor 
                      accumsan tincidunt.
                  </p>
              </div>
              <div class="story-cover">
                  <img src="img/story-cover.jpeg" alt="story cover">
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Happy+Monkey&family=Montserrat+Alternates&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat Alternates', sans-serif;
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
}

.sidelist{
    gap: 10px;
    align-items: center;
    margin: 20px 0;
    background-color: #42ACF2;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
}

.sidelist:hover{
    background-color: #B042F2;
    transition: .8s;
    -webkit-transition: .8s;
    -moz-transition: .8s;
    -ms-transition: .8s;
    -o-transition: .8s;
}

.icon{
    width: 20px;
}

.btn-none{
    font-size: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

/* CONTENU PRINCIPAL */
.user-contain{
    border-left: 1px solid #f3f3f3;
    padding: 30px;
    width: 70%;
}

.profil-content{
    width: 100%;
    text-align: center;
    padding: 20px;
}

.profil-cover{
    width: 100%;
    height: 250px;
}

.usercov{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.circle{
    border: 2px solid white;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
}

.big-circle{
    width: 100px;
    height: 100px;
    position: relative;
    margin: -50px auto 20px;
    box-shadow: 1px 1px 15px 1px rgba(194,194,194,0.6);
    -webkit-box-shadow: 1px 1px 15px 1px rgba(194,194,194,0.6);
    -moz-box-shadow: 1px 1px 15px 1px rgba(194,194,194,0.6);
}

.circle img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
}

.username{
    font-size: 20px;
}

.pseudo{
    font-family: 'Happy Monkey', cursive;
}

.descrip{
    max-width: 300px;
    margin: 10px auto;
}

.comment{
    margin: 20px 0;
}

.story{
    padding: 20px;
}

.mini-circle{
    width: 60px;
    height: 60px;
}

.box-button{
    margin-top: 20px;
}

.btn{
    font-size: 16px;
    background-color: #42ACF2;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
}

.btn:hover{
    background-color: #B042F2;
    transition: .5s;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
}

.usernav{
    align-items: center;
    gap: 20px;
}

.story{
    width: 630px;
    margin: auto;
}

.story-cover img{
    width: 100%;
    border-radius: 13px;
    -webkit-border-radius: 13px;
    -moz-border-radius: 13px;
    -ms-border-radius: 13px;
    -o-border-radius: 13px;   
}

audio{
    width: 100%;
    background-color: #f2f3f4;
    border-radius: 13px;
    -webkit-border-radius: 13px;
    -moz-border-radius: 13px;
    -ms-border-radius: 13px;
    -o-border-radius: 13px;
}
</style>
