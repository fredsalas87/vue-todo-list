<template>
<div>
  <v-col
    cols="12"
  >
    <v-text-field
      v-model="entradaTarefas"
      label="Qual é sua tarefa"
      outlined
      clearable
      @keyup.enter="adicionarTarefa"
    ></v-text-field>
  </v-col>
  <v-list
      flat
      subheader
    >
    <v-list-item-group
    multiple
    active-class=""
  >
  <div 
    v-for="tarefa, index in $store.state.tarefas" 
    :key="index">
    <Tarefa 
      :tarefa="tarefa"
    />
  </div>
  </v-list-item-group>
    </v-list>
</div>
</template>

<script>
import Tarefa from '../components/tarefas/Tarefa.vue'

export default {
  name: 'Home',
  components: {
    Tarefa
  },
  data: () => ({
    entradaTarefas: '',
  }),
  methods: {
    adicionarTarefa() {
      this.$store.commit('adicionarTarefa', this.entradaTarefas),
      this.entradaTarefas = null
    }
  }
}
</script>
