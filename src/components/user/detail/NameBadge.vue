<template>
  <h1 className="id">
    <span> <i className="fab fa-github"></i> {{ user.login }} </span>
  </h1>
</template>

<script>
export default {
  props: { user: Object }
}
</script>

<style></style>
