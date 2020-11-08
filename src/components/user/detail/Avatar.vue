<template>
  <a class="avatar-link" href="#" target="_blank" rel="noopener noreferrer">
    <img class="avatar" :src="user.avatar_url" :alt="user.login" />
  </a>
</template>

<script>
export default {
  props: { user: Object }
}
</script>

<style></style>
