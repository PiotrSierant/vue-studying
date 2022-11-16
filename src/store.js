import Vue from 'vue'
import Vuex from 'vuex'
import authAxios from './auth-axios';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    students: null
  },
  getters: {
    isAuth: state => state.token !== null
  },
  mutations: {
    auth(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
    },
    setStudents(state, payload) {
      state.students = payload;
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        let response = await authAxios.post(
          'verifyPassword?key=AIzaSyDNz_WU0sr2adhmTSnEVVUcC3HbjRUJf38', payload);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId
        });

        const now = new Date();
        const endDate = new Date(now.getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expires', endDate);
      } catch (e) {
        console.log(e);
      }
    },
    autologin({ commit }) {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const userId = localStorage.getItem('userId');
      if (!userId) {
        return;
      }
      const expirationDate = localStorage.getItem('expires');
      const now = new Date();
      if (now >= expirationDate) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expires');
        return;
      }

      commit('auth', {
        token,
        userId
      });
    },
    async register({ commit }, payload) {
      try {
        let response = await authAxios.post(
          'signupNewUser?key=AIzaSyDNz_WU0sr2adhmTSnEVVUcC3HbjRUJf38', payload);
        commit('auth', {
          token: response.data.idToken,
          userId: response.data.localId
        })

        const now = new Date();
        const endDate = new Date(now.getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expires', endDate);
      } catch (e) {
        console.log(e);
      }
    },
    async getStudents({ commit, state }) {
      if (state.userId == null) {
        return;
      }

      try {
        let { data } = await axios.get('https://adv-vue.firebaseio.com/players.json?auth=' + state.token);
        commit('setStudents', Object.values(data))
      } catch (e) {
        console.log(e)
      }
    }
  }
})
