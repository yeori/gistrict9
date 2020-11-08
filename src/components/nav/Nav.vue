<template>
  <div>
    <router-link to="/">Gistrict</router-link> |
    <router-link to="/bookmarks">Bookmark</router-link>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    return { email }
  }
}
</script>

<style></style>
