import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    jsonData: null
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setJsonData(state, payload) {
      state.jsonData = payload;
    }
  },
  actions: {
    getJsonData(context) {
      if (!context.state.jsonData) {
        context.commit("setLoading", true);

        let request = fetch(
          "https://classes.xiloe.fr/v1/classes.json"
        ).then(response => response.json());

        request.then(payload => {
          context.commit("setJsonData", payload);
          context.commit("setLoading", false);
        });
      }
    }
  },
  modules: {}
});
