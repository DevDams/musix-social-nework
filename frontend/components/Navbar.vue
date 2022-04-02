<template>
  <div>
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <h1>
            <nuxt-link to="/">Sign</nuxt-link>
          </h1>
        </div>
        <div class="desktop-menu">
          <div class="menu-items">
            <div class="item">
              <nuxt-link to="">
                <button >Apropos</button>
              </nuxt-link>
            </div>
            <div class="item">
              <nuxt-link to="">
                <button >Contact</button>
              </nuxt-link>
            </div>
            <div class="item">
              <nuxt-link to="/signup">
                <button>S'inscrire</button>
              </nuxt-link>
            </div>
            <div class="item">
              <nuxt-link to="/login">
                <button>connexion</button>
              </nuxt-link>
            </div>
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
a{
  text-decoration:none;
}
.navbar{
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7%;
  background:rgba(245, 241, 241, 0.753);
  z-index: 99;
  box-shadow: 0px 6px 24px -18px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 6px 24px -18px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 6px 24px -18px rgba(0,0,0,0.75);
}
.container{
  width: 90%;
  height: 100%;
  margin:0 auto;
  display: flex;
  align-items: center;
  justify-content:space-between;
  color: white;
}
.logo{
  width: 20%;
}
.desktop-menu .menu-items{
  width:70%;
  height: 100%;
  display: flex;
  align-items: center;
}
.desktop-menu .menu-items .item{
  padding: 0 25px;
}
.desktop-menu .menu-items .item button{
  background:none;
  border:none;
  outline: none;
  font-size: 17px;
  font-weight:500;
  cursor: pointer;
}
</style>
