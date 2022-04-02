<template>
  <div>
    <div class="menu-home">
      <div class="overlay" :class="{'visible':visible}" @click="maskMenu"></div>
    </div>
    <div class="content-menu">
      <div class="logo">
        <nuxt-link to='/'></nuxt-link>
      </div>
    </div>
  </div>
</template>
