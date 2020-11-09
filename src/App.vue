<template>
  <Nav />
  <div class="nav-pad"></div>
  <router-view />
  <div class="nav-pad"></div>
  <FooterBar />
</template>
<script>
import Nav from './components/nav/Nav'
import FooterBar from './components/nav/FooterBar'
export default {
  components: {
    Nav,
    FooterBar
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}
.nav-pad {
  height: 56px;
}
</style>
