<template>
  <div>
    <b-modal
      id="tutorial-modal"
      title="Votre nom n'apparaît pas ou il y as une erreur ?"
      hide-footer
    >
      <div class="d-flex justify-content-center">
        <b-spinner variant="primary" class="m-3" />
      </div>
      <b-button
        variant="danger"
        class="container-fluid mt-3"
        @click="$bvModal.hide('tutorial-modal')"
      >
        Fermer
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      modal: 0
    };
  }
};
</script>
