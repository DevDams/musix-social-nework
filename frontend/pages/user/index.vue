<template>
  <div>
    <!-- Commencez à coder ici -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userData: ''
    }
  },
  async mounted () {
    const userId = localStorage.getItem('userId')
    this.userData = await axios.get(`http://localhost:5001/api/user/${userId}`)
      .then((res) => {
        return res.data
      })
      .catch(function (err) {
        return err
      })
    console.log(this.userData)
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
