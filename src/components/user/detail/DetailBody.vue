<template>
  <summary className="detail">
    <time className="since"
      ><i v-if="!detail" class="fas fa-spinner fa-spin"></i>
      {{ ymd(detail, '.') }}</time
    >
    <p>
      <a :href="getProp(detail, 'blog', '#')">
        <i v-if="!detail" class="fas fa-spinner fa-spin"></i>
        {{ blogUrl(detail) }}
      </a>
    </p>
    <p>
      <a href="http://dylanegan.com">http://dylanegan.com</a>
    </p>
    <ul className="rff">
      <li>
        <i className="fas fa-archive"></i>{{ ' ' }}
        <span className="desc">repo</span>
        {{ detail ? detail.public_repos : '' }}
      </li>
      <li>
        <i className="fas fa-users"></i>{{ ' ' }}
        <span className="desc">followers</span>
        {{ detail ? detail.followers : '' }}
      </li>
      <li>
        <i className="fas fa-hand-point-up"></i>{{ ' ' }}
        <span className="desc">followings</span>
        {{ detail ? detail.following : '0' }}
      </li>
    </ul>
  </summary>
</template>

<script>
const ymd = (obj, ch) => {
  if (!obj) {
    return '..loading..'
  }
  const i = obj.created_at.indexOf('T')
  return obj.created_at.substring(0, i).replaceAll('-', ch)
}
const blogUrl = obj => {
  if (!obj) {
    return '..loading..'
  }
  return obj.blog === '' ? 'NO BLOG' : obj.blog
}
export default {
  props: {
    detail: Object
  },
  setup() {
    const getProp = (ctx, propName, defaultValue) => {
      return ctx ? ctx[propName] : defaultValue
    }
    return { ymd, getProp, blogUrl }
  }
}
</script>

<style></style>
