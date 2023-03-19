<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="entradaTarefas"
        label="Qual é sua tarefa"
        outlined
        clearable
        @keyup.enter="adicionarTarefa"
      ></v-text-field>
    </v-col>
    <ListaDeTarefas />
  </div>
</template>

<script>
import ListaDeTarefas from "../components/tarefas/ListaDeTarefas.vue";

export default {
  name: "Home",
  components: {
    ListaDeTarefas,
  },
  data: () => ({
    entradaTarefas: "",
  }),
  created() {
    this.$store.commit("buscaTarefas");
  },
  methods: {
    adicionarTarefa() {
      this.$store.dispatch("adicionarTarefa", this.entradaTarefas),
        (this.entradaTarefas = null);
    },
  },
};
</script>
