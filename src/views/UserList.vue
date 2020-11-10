<template>
  <div v-if="page" class="user-card">
    <UserBar
      v-for="user in page.users"
      :key="user.id"
      :user="user"
      @user-clicked="showUser"
    />
    <transition name="fade">
      <UserPopup
        v-if="activeUser"
        :user="activeUser"
        @close="activeUser = null"
      />
    </transition>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { mapGetters, useStore } from 'vuex'
import UserBar from '@/components/user/UserBar.vue'
import UserPopup from '@/components/user/UserPopup.vue'

export default {
  components: {
    UserBar,
    UserPopup
  },
  setup() {
    const store = useStore()
    const activeUser = ref(null)
    const showUser = user => {
      activeUser.value = user
    }
    onMounted(() =>
      store.dispatch('gitStore/loadUsers', { lastUser: null, pageShow: true })
    )
    return {
      activeUser,
      showUser
    }
  },
  computed: {
    ...mapGetters({
      page: 'gitStore/currentPage'
    })
  }
}
</script>

<style lang="scss">
.user-card {
  margin: 0rem;
  user-select: none;
  // display: inline-block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.11, 0.65, 0.32, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
