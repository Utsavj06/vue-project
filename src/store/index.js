import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const default createStore({
  state : {
    user : null
  },
  mutations: {
    SET_USER (state , user) {
        state.user = user
    },
    CLEAR_USER (state) {
        state.user = null
    }
  },
  actions: {
    async login ({ commit }, details) {

    },
    async register ({ commit }, details) {

    },
    async logout ({ commit }) {

    },
  }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)