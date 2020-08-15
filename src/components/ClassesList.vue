<template>
  <div>
    <div class="mb-3">
      <h2>Liste des classes année 2020-2021</h2>
      <!--
        <b-button
        variant="link"
        class="p-0"
        @click="$bvModal.show('tutorial-modal')"
      >
        <b class="text-danger">Votre nom n'apparaît pas ?</b>
      </b-button>
      -->
    </div>
    <b-table
      hover
      bordered
      :fields="fields"
      :items="data.classes"
      responsive="sm"
    >
      <!-- A custom formatted column -->
      <template v-slot:cell(name)="data">
        {{ data.value }}
      </template>

      <template v-slot:cell()="data">
        <i v-for="student in data.item.students" :key="student.id">
          {{ student.firstname }} {{ student.lastname
          }}<span v-if="student.id != data.item.students.length - 1">,</span>
        </i>
      </template>
    </b-table>
    <Modal />
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Classes-List",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    Modal
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Classe" },
        { key: "students", label: "Élèves" }
      ]
    };
  }
};
</script>
