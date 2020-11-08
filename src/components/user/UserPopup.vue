<template>
  <div class="popup-bg-wrapper">
    <a href="#nothing" class="close" @click.prevent="() => $emit('close')">
      <i class="fas fa-times"></i>
    </a>
    <div class="wrapper">
      <Avatar :detail="detail" :user="user" />
      <NameBadge :user="user" />
      <DetailBody :detail="detail" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Avatar from './detail/Avatar.vue'
import NameBadge from './detail/NameBadge'
import DetailBody from './detail/DetailBody'
export default {
  components: {
    Avatar,
    NameBadge,
    DetailBody
  },
  props: {
    user: Object
  },
  setup(props) {
    const detail = ref(null)
    const loadUserDetail = user => {
      const url = `https://api.github.com/users/${user.login}`
      fetch(url)
        .then(res => res.json())
        .then(userDetails => {
          console.log(userDetails)
          detail.value = userDetails
        })
    }

    onMounted(() => loadUserDetail(props.user))
    return {
      detail,
      loadUserDetail
    }
  }
}
</script>

<style lang="scss">
.popup-bg-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  background-color: #ccccccaa;
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
  }
  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 4rem);
    max-width: 600px;
    background: radial-gradient(at 30px 30px, #a8fefe, transparent),
      radial-gradient(at 170% 170%, #4a83f6, #a8fefe);
    border-radius: 2rem;
    box-shadow: 1px 1px 26px #cccccc87;

    .avatar-link {
      width: 150px;
      height: 170px;
      position: relative;
      transform: translate(-50%, -50%);
      left: 50%;
      display: block;
      .avatar {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        height: auto;
        border-radius: 1rem;
        border: 5px solid white;
        transform: translate(-50%, -50%);
        transition: width 0.1s ease-in;
      }
      &:hover {
        .avatar {
          width: 108%;
        }
      }
    }

    .id {
      text-align: center;
      margin: 0;
      margin-top: -50px;
      span {
        border: 1px solid #039be5;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        font-weight: 100;
        color: #039be5;
        text-shadow: 1px 1px #ffffff;
      }
    }
    .detail {
      padding: 1.5rem;
      .since {
        display: block;
        text-align: right;
      }
      p {
        margin-bottom: 0;
        & > * {
          display: inline-block;
        }
        a {
          text-decoration: none;
          background-color: #d7fffa;
          padding: 0.4rem 0.75rem;
          border-radius: 1rem;
          color: #124ab9;
          border: 1px solid transparent;
          transition: border-left 0.1s ease-out;
          &:hover {
            border-left: 8px solid #517fff;
          }
        }
      } // end-p
      .rff {
        list-style: none;
        padding: 0;
        margin-bottom: 0;
        text-align: center;
        color: #101eca;
        li {
          display: inline-block;
          width: 30%;
          white-space: nowrap;
          .desc {
            opacity: 1;
            display: inline-block;
            transition: all 0.2s linear;
          }
        }
        @media (max-width: 540px) {
          .desc {
            opacity: 0 !important;
            width: 0px;
          }
        }
      }
    }
  }
}
</style>
