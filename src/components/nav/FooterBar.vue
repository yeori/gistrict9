<template>
  <nav class="nav">
    <button :class="{ disabled: isFirstPage }">
      <i class="fas fa-arrow-left"></i>
    </button>
    <div class="pgn-wrapper">
      <ul class="pgn" ref="pgbox">
        <li
          class="page"
          :class="{ active: idx === page.index }"
          v-for="(pg, idx) in pageLen"
          :key="pg"
          @click.prevent="() => pageClicked(idx)"
          :data-pg="idx"
        >
          <a href="#">{{ pg }}</a>
        </li>
      </ul>
    </div>
    <button @click="nextPage">
      <i class="fas fa-arrow-right"></i>
    </button>
    <a
      class="btn-more"
      :class="{ disabled: isLoading }"
      href="#"
      @click.prevent="loadMorePage"
      ><i v-if="isLoading" class="fas fa-spinner fa-spin"></i
      ><i v-else class="fab fa-github"></i> {{ isLoading ? 'WAIT' : 'MORE' }}</a
    >
  </nav>
</template>

<script>
// import { ref } from 'vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const _installPagenation = ({ getters, dispatch }) => {
  const page = computed(() => getters['gitStore/currentPage'])
  const pageLen = computed(() => getters['gitStore/pageLength'])
  const pgbox = ref(null)
  const isLoading = computed(() => getters['gitStore/isLoading'])
  const setPage = pageIndex => dispatch('gitStore/setActivePage', pageIndex)

  const isFirstPage = () => page.value && page.value.pageIndex === 0
  return { page, pageLen, pgbox, isLoading, setPage, isFirstPage }
}
export default {
  setup() {
    const store = useStore()
    const pgn = _installPagenation(store)
    const getLastUser = () => {
      const { page } = pgn
      if (!page.value) {
        return null
      }
      const { users } = page.value
      return users[users.length - 1]
    }
    const pageClicked = pageIndex => {
      console.log('[pg]', pageIndex)
      pgn.setPage(pageIndex)
      // pgnumEl.value = e.currentTarget
      // console.log('done')
    }
    const loadMorePage = () => {
      if (pgn.isLoading.value) {
        return
      }
      store.dispatch('gitStore/loadUsers', {
        lastUser: getLastUser(),
        pageShow: true
      })
    }
    return {
      ...pgn,
      nextPage: () => {},
      loadMorePage,
      pageClicked
    }
  }
}
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
  // justify-content: space-between;
  background-color: #fff;
  padding: 0 16px 0 0;
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
    flex: 0 0 48px;
    &:hover {
      background-color: #e2e2e2;
      cursor: pointer;
      font-size: 1.2rem;
    }
    &:active {
      background-color: #c2c2c2;
    }
  }
  .pgn-wrapper {
    flex: 1 1;
    overflow: auto;
    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: lightgray;
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
    .pgn {
      list-style: none;
      padding: 0;
      display: flex;
      margin: 0;
      width: 100%;
      .page {
        position: relative;
        & > a {
          padding: 0.5rem 0.9rem;
          display: inline-block;
          text-decoration: none;
          color: #ccc;
          transition: all 0.2s cubic-bezier(0.04, 0.56, 0.21, 1);
        }
        &.active > a {
          background-color: rgb(224, 238, 255);
          color: #007bff;
          border-radius: 2rem;
        }
      }
    }
  }
  .btn-more {
    text-decoration: none;
    border: 1px solid #78a8ff;
    padding: 0.4rem 0.6rem;
    border-radius: 2rem;
    font-size: 0.8rem;
    &:hover {
      background-color: #eaf2ff;
    }
    &.disabled {
      background-color: #eeeeee;
      border: 1px solid #cccccc;
      color: #888;
    }
  }
}
</style>
