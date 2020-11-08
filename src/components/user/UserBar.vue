<template>
  <article>
    <div class="card-body">
      <div class="img-holder">
        <img
          class="avatar"
          :src="user.avatar_url"
          :alt="user.login"
          @click="$emit('user-clicked', user, 'avatar')"
        />
      </div>
      <span class="desc" @click="() => $emit('user-clicked', user, 'login')">
        {{ user.login }}
      </span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    user: Object
  },
  setup() {}
}
</script>

<style lang="scss">
.card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 16px;
  border-bottom: 1px solid #eeeeee;
  height: 56px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #eeeeee;
    .img-holder {
      .avatar {
        width: 56px;
        height: 56px;
      }
    }
  }
  .img-holder {
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 9px;
      flex: 0 1 auto;
      transition: width, height 0.2s cubic-bezier(0, 0.76, 0.39, 1);
    }
  }
  .desc {
    overflow-x: hidden;
    text-overflow: ellipsis;
    flex: 0 0 auto;
    padding-left: 16px;
    padding-bottom: 6px;
  }
}
.card-body:hover::after {
  display: block;
  height: 100%;
  width: 6px;
  background-color: red;
  content: '';
  position: absolute;
  left: -16px;
}
</style>
