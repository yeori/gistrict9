<template>
  <nav class="nav" :class="navStyleClass">
    <router-link to="/" class="nav-item">Gistrict</router-link>
    <router-link to="/bookmarks" class="nav-item">Bookmark</router-link>
  </nav>
</template>
<script>
import { onBeforeMount, ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    const navStyleClass = ref('top')
    const onPageScrolled = () => {
      const className = window.scrollY < 5 ? 'top' : 'scrolling'
      navStyleClass.value = className
    }
    onBeforeMount(() => {
      window.addEventListener('scroll', onPageScrolled)
    })
    return { email, navStyleClass }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  z-index: 100;
  transition: min-height 1s linear;
  height: 50px;
  align-items: center;
  &.top {
    background: linear-gradient(90deg, #f8ffb9, #fefff5);
    border-bottom: 1px solid #ccccccaa;
  }
  &.scrolling {
    box-shadow: 0 1px 6px #ccccccaa;
    background-color: #ffffffdd;
  }
  & > .nav-item {
    display: inline-block;
    padding: 8px 10px;
    text-decoration: none;
    color: #007bff;
  }
}
</style>
