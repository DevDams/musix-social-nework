<template>
  <div class="container disp-flex">
    <!-- SIDEBAR LEFT -->
    <div class="sidebar-left">
      <div class="sidelist disp-flex">
        <nuxt-link to="/home">
          <img src="~/assets/svg/home.svg" alt="icon" class="icon">
          <button class="btn-none">Accueil</button>
        </nuxt-link>
      </div>
      <div class="sidelist disp-flex">
        <nuxt-link to="/audio">
          <img src="~/assets/svg/audio.svg" alt="icon" class="icon">
          <button class="btn-none">Mes audios</button>
        </nuxt-link>
      </div>
      <div class="sidelist disp-flex">
        <nuxt-link to="/user">
          <img src="~/assets/svg/user.svg" alt="icon" class="icon">
          <button class="btn-none">Profil</button>
        </nuxt-link>
      </div>
      <div class="sidelist disp-flex">
        <a href="#">
          <img src="~/assets/svg/post.svg" alt="icon" class="icon">
          <button class="btn-none">Publier</button>
        </a>
      </div>
      <div class="sidelist disp-flex" @click="logOut">
        <nuxt-link to="/login">
          <button class="btn-none">Se déconnecter</button>
        </nuxt-link>
      </div>
    </div>
    <!-- CONTENU PRINCIPAL -->
    <div class="user-contain">
      <div class="title">
        <h1>Mes audios</h1>
      </div>
        <div class="story-content">
          <div class="story">
            <div class="disp-flex usernav">
              <div class="circle mini-circle">
                <img src="https://media.istockphoto.com/photos/dramatic-twilight-cloudscape-sunset-sunrise-picture-id1158514405?k=6&m=1158514405&s=612x612&w=0&h=Kyo1MLQeLP-cmyVB_ucvzVL17-iKapYnlnRdrs9NV-M=" alt="lambo">
              </div>
              <div class="identity">
                <p class="username">Lorem ipsum.</p>
                <p class="pseudo">@lorem123</p>
              </div>
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
                <p class="username">Lorem ipsum.</p>
                <p class="pseudo">@lorem123</p>
              </div>
            </div>
            <div class="comment">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error assumenda voluptatem itaque sint dicta suscipit illum doloremque libero dolorem obcaecati veritatis placeat, consequuntur dolores, fuga non. Dicta, ex cum.
              </p>
            </div>
            <div class="story-cover">
              <img src="https://img-4.linternaute.com/Pb072YlIGB6w9EHFmJ3WI1NWbtE=/660x366/smart/686c7440c6f1419996abe4af9cb6f70a/ccmcms-linternaute/11101673.jpg" alt="story cover">
            </div>
            <div class="audio">
              <audio src="" preload="auto" controls></audio>
            </div>
          </div>
          <div class="story">
            <div class="disp-flex usernav">
              <div class="circle mini-circle">
                <img src="https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c" alt="lambo">
              </div>
              <div class="identity">
                <p class="username">Lorem ipsum.</p>
                <p class="pseudo">@lorem123</p>
              </div>
            </div>
            <div class="audio">
              <audio src="" preload="auto" controls></audio>
            </div>
          </div>
          <div class="story">
            <div class="disp-flex usernav">
              <div class="circle mini-circle">
                <img src="https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c" alt="lambo">
              </div>
              <div class="identity">
                <p class="username">Lorem ipsum.</p>
                <p class="pseudo">@lorem123</p>
              </div>
            </div>
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias doloremque aperiam a inventore deserunt aliquid eos officiis esse dicta atque, consectetur aspernatur, quod possimus commodi maiores ab ad. Temporibus?
              </p>
            </div>
            <div class="story-cover">
              <img src="https://img-4.linternaute.com/Pb072YlIGB6w9EHFmJ3WI1NWbtE=/660x366/smart/686c7440c6f1419996abe4af9cb6f70a/ccmcms-linternaute/11101673.jpg" alt="story cover">
            </div>
            <div class="audio">
              <audio src="" preload="auto" controls></audio>
            </div>
          </div>
          <div class="story">
            <div class="disp-flex usernav">
              <div class="circle mini-circle">
                <img src="https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c" alt="lambo">
              </div>
              <div class="identity">
                <p class="username">Lorem ipsum.</p>
                <p class="pseudo">@lorem123</p>
              </div>
            </div>
            <div class="audio">
              <audio src="" preload="auto" controls></audio>
            </div>
          </div>
          <div class="story">
            <div class="disp-flex usernav">
              <div class="circle mini-circle">
                <img src="https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c" alt="lambo">
              </div>
              <div class="identity">
                <p class="username">Lorem ipsum.</p>
                <p class="pseudo">@lorem123</p>
              </div>
            </div>
            <div class="comment">
              <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aspernatur facere ipsam, est impedit ullam nostrum sed illum? Perferendis totam consectetur quod vero quae aperiam hic dolorem, enim voluptatum! Assumenda.
              </p>
            </div>
            <div class="story-cover">
              <img src="https://img-4.linternaute.com/Pb072YlIGB6w9EHFmJ3WI1NWbtE=/660x366/smart/686c7440c6f1419996abe4af9cb6f70a/ccmcms-linternaute/11101673.jpg" alt="story cover">
            </div>
            <div class="audio">
              <audio src="" preload="auto" controls></audio>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut () {
      localStorage.removeItem('userId')
      this.$router.push('/login')
    }
  }
}
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
  padding: 13px;
}

.sidelist a {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  padding: 13px 20px;
  border-radius: 55px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  cursor: pointer;
}

.sidelist a button {
  background: none;
  color: white;
  outline: none;
  border: none;
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.icon {
  width: 21px;
}

/* CONTENU PRINCIPAL */
.user-contain{
  border-left: 2px solid #e2e2e2;
  padding: 30px;
  width: 70%;
}

.title{
  border-bottom: 1px solid #f3f3f3;
  padding-bottom: 20px;
  text-transform: uppercase;
}

.circle{
  border: 2px solid white;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
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

.descrip{
  max-width: 400px;
  margin: 20px auto;
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

.story-content{
  margin-top: 50px;
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

.audio{
  margin: 20px 0;
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
