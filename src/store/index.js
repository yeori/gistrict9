import { createStore } from 'vuex'
import gitStore from './modules/git-store'

export default createStore({
  strict: true,
  modules: {
    gitStore
  }
})
