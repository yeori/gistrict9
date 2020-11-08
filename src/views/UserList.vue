<template>
  <div class="user-card">
    <UserBar
      v-for="user in users"
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
import UserBar from '@/components/user/UserBar.vue'
import UserPopup from '@/components/user/UserPopup.vue'

const ENTRY_POINT = 'https://api.github.com'

export default {
  components: {
    UserBar,
    UserPopup
  },
  setup() {
    const users = ref([])
    const activeUser = ref(null)
    const loadUsers = lastUser => {
      const id = lastUser ? '?since=' + lastUser.id : ''
      const url = `${ENTRY_POINT}/users${id}`
      fetch(url)
        .then(res => res.json())
        .then(newUsers => {
          console.log(newUsers)
          users.value.push(...newUsers)
          // setLastUser(users[users.lenth - 1]);
        })
    }
    const showUser = user => {
      activeUser.value = user
    }
    onMounted(() => loadUsers())
    return {
      users,
      activeUser,
      showUser
    }
  }
}
</script>

<style lang="scss">
.user-card {
  margin: 0rem;
  // display: inline-block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
