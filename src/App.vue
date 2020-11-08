<template>
  <Nav />
  <router-view />
</template>
<script>
import Nav from './components/nav/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}
</style>
