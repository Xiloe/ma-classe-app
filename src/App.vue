<template>
  <b-container id="app" class="d-flex justify-content-center mt-3">
    {{ getData() }}
    <b-spinner v-if="isLoading" variant="primary" />
    <div v-else>
      <b-alert show dismissible variant="warning">
        Actuellement disponible uniquement pour l'établissement Albert Einstein,
        Bagnols-sur-Cèze
      </b-alert>
      <Classes-List :data="jsonData" />
      <div class="container-fluid text-center p-5">
        Copyleft © 2020 Xiloe, Woteck. This site is under MIT.
        <a href="http://github.com/Xiloe/ma-classe-app" target="_blank">
          Github
        </a>
      </div>
    </div>
  </b-container>
</template>

<script>
import ClassesList from "./components/ClassesList.vue";

export default {
  name: "App",
  components: {
    ClassesList
  },
  data() {
    return {
      jsonData: {}
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("getJsonData");
      this.jsonData = this.$store.state.jsonData;
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>
