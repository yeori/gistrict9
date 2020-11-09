<template>
  <nav class="nav">
    <button><i class="fas fa-arrow-left"></i></button>
    <button><i class="fas fa-arrow-right"></i></button>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 16px;
  box-shadow: 0 -1px 4px #ccccccaa;
  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 0.8rem;
    width: 48px;
    height: 48px;
    border-radius: 2rem;
    transition: font-size 0.1s cubic-bezier(0.1, 0.65, 0.21, 1);
    &:hover {
      background-color: #e2e2e2;
      cursor: pointer;
      font-size: 1.2rem;
    }
    &:active {
      background-color: #c2c2c2;
    }
  }
}
</style>
