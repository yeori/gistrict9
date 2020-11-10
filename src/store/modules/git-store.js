const ENTRY_POINT = 'https://api.github.com'
const LOAD_STATE = {
  IDLE: 0,
  LOADING: 1
}
const state = {
  pages: [],
  pageIndex: -1,
  loadState: LOAD_STATE.IDLE
}
const getters = {
  currentPage: state => {
    return state.pageIndex < 0 ? null : state.pages[state.pageIndex]
  },
  pageLength: state => state.pages.length,
  isLoading: state => state.loadState == LOAD_STATE.LOADING
}
const actions = {
  loadUsers(ctx, { lastUser, pageShow }) {
    const id = lastUser ? '?since=' + lastUser.id : ''
    const url = `${ENTRY_POINT}/users${id}`
    ctx.commit('setLoadState', LOAD_STATE.LOADING)
    fetch(url)
      .then(res => res.json())
      .then(newUsers => {
        // DO NOT CALL DIRECTORY LIKE mutations.setUsers(state, newUsers)
        ctx.commit('setUsers', newUsers)
        if (pageShow) {
          ctx.commit('setActivePage', ctx.state.pages.length - 1)
        }
        ctx.commit('setLoadState', LOAD_STATE.IDLE)
      })
  },
  setActivePage(ctx, pageIndex) {
    ctx.commit('setActivePage', pageIndex)
  }
}
const mutations = {
  setUsers(state, users) {
    const index = state.pages.length
    state.pages.push({ index, users })
    // state.pageIndex = index
  },
  setActivePage(state, pageIndex) {
    if (pageIndex >= 0) {
      state.pageIndex = pageIndex
    } else {
      throw new Error('invalid pageindex: ' + pageIndex)
    }
  },
  setLoadState(state, value) {
    state.loadState = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
