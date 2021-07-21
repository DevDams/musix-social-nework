<template>
  <div>
    <!-- Commencez à coder ici -->
    <div class="container disp-flex">
      <!-- SIDEBAR LEFT -->
      <div class="sidebar-left">
        <div class="sidelist disp-flex">
          <img src="~/assets/svg/home.svg" alt="icon" class="icon">
          <a href="#">
              <button class="btn-none">Accueil</button>
          </a>
        </div>
        <div class="sidelist disp-flex">
          <img src="~/assets/svg/audio.svg" alt="icon" class="icon">
          <nuxt-link to="/audio">
            <button class="btn-none">Mes audios</button>
          </nuxt-link>
        </div>
        <div class="sidelist disp-flex">
          <img src="~/assets/svg/user.svg" alt="icon" class="icon">
          <a href="#">
              <button class="btn-none">Profil</button>
          </a>
        </div>
        <div class="sidelist disp-flex">
          <img src="~/assets/svg/post.svg" alt="icon" class="icon">
          <a href="#">
              <button class="btn-none">Publier</button>
          </a>
        </div>
      </div>
      <!-- CONTENU PRINCIPAL -->
      <div class="user-contain">
        <div class="profil-content">
          <div class="profil-cover">
            <img src="https://media.istockphoto.com/photos/dramatic-twilight-cloudscape-sunset-sunrise-picture-id1158514405?k=6&m=1158514405&s=612x612&w=0&h=Kyo1MLQeLP-cmyVB_ucvzVL17-iKapYnlnRdrs9NV-M=" alt="story-cover" class="usercov">
          </div>
          <div class="circle big-circle">
            <img src="https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c" alt="user" class="user">
          </div>
          <div class="identity">
            <p class="username">Lorem ipsum dolor sit amet.</p>
            <p class="pseudo">@lorem123</p>
          </div>
          <div class="descrip">
            <span>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</span>
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
              <img src="https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c" alt="lambo">
            </div>
            <div class="identity">
              <p class="post-username">Lorem ipsum.</p>
              <p class="post-pseudo">@lorem123</p>
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
export default {}
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
}

.sidelist {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
    background-color: #42ACF2;
    cursor: pointer;
    border: none;
    padding: 15px 25px;
    border-radius: 55px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    -ms-border-radius: 25px;
    -o-border-radius: 25px;
}

.sidelist:hover{
    background-color: #42acf2ab;
}

.icon{
    width: 25px;
}

.btn-none {
    font-size: 21px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
}

/* CONTENU PRINCIPAL */
.user-contain {
    border-left: 1px solid #f3f3f3;
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
}

.post-username {
  font-size: 21px;
  font-weight: 500;
}

.post-comment{
    margin: 20px 0;
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
  padding: 10px 27px;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  color: white;
}

.btn:hover {
    background-color: #B042F2;
    transition: .5s;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
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
