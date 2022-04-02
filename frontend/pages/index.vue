<template>
  <div>
  <!-- commencer à coder ici -->
    <!-- PAGE D'ACCUEIL -->
    <Navbar/>
    <div class="home-content">
      <div class="home-left">
        <img src="~/assets/svg/task.svg" alt="cover">
        <div class="reseau-items">
          <div class="item">
            <nuxt-link to="">
                <img src="#" alt="">
              </nuxt-link>
          </div>
          <div class="item">
            <nuxt-link to="">
                <img src="#" alt="" >
              </nuxt-link>
          </div>
          <div class="item">
            <nuxt-link to="">
                <img src="#" alt="">
              </nuxt-link>
          </div>
        </div>
      </div>
      <div class="home-right">
          <h1>Lorem ipsum, dolor sit amet consectetur adipi</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipi</h2>
          <div class="box-button">
            <nuxt-link to="/bienvenue">
              <button class="btn btn-blue">Bienvenue</button>
            </nuxt-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const userId = localStorage.getItem('userId')
    if (userId) {
      this.$router.push('/profil')
    } else {
      return ''
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

a {
  text-decoration: none;
}

/* PAGE D'ACCUEIL */
.logo{
  width: 50px;
  height: 50px;
  position: absolute;
  top: 5px;
}
.logo img {
  width: 100%;
  height: 100%;
}

.home-content {
  display: flex;
  align-items: center;
}

.home-left {
  background: linear-gradient( rgb(116, 195, 248),rgb(249, 247, 250));
  width: 50%;
  height: 90vh;
}

.home-left img {
  width: 80%;
  height: 100%;
  object-fit: cover;
  border-radius:50%
}

.home-right {
  padding: 0 40px;
  width: 50%;
}

.home-right h1 {
  font-weight: 700;
  font-size: 35px;
  padding: 37px 0px 30px 0px;
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
  border-radius: 20px;
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
  background: linear-gradient(to left, #42ACF2,rgb(166, 164, 167));
  position: relative;
}

.btn-blue:hover{
  background: linear-gradient(to right, #42ACF2,rgb(166, 164, 167));
  transition: .2s all ease-in-out;
}

.btn-light{
  border: 1px solid #42ACF2;
  color: #42ACF2;
  background-color: transparent;
  position: relative;
  z-index: 0;
}

.btn-light:hover{
  background: linear-gradient(to right, #42ACF2,rgb(166, 164, 167));
}
</style>
