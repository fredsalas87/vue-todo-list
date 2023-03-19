import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [
      // {id:1, titulo: 'Ir ao mercado', concluido: false},
      // {id:2, titulo: 'Ir à padaria', concluido: false},
    ],
  },
  mutations: {
    buscaTarefas(state) {
      db.collection("tarefas")
        .get()
        .then((tarefasDB) => {
          state.tarefas = tarefasDB;
        });
    },
    adicionarTarefa(state, titulo) {
      db.collection("tarefas").add({
        id: new Date().getTime(),
        titulo,
        concluido: false,
      });
    },
  },
  actions: {
    async adicionarTarefa({ commit }, titulo) {
      await commit("adicionarTarefa", titulo);
      await commit("buscaTarefas");
    },
    editaTarefa({ commit }, novaTarefa) {
      db.collection("tarefas")
        .doc({ id: novaTarefa.id })
        .update({
          titulo: novaTarefa.titulo,
        })
        .then(() => {
          commit("buscaTarefas");
        });
    },
    removeTarefa({ commit }, id) {
      db.collection("tarefas")
        .doc({ id })
        .delete()
        .then(() => {
          commit("buscaTarefas");
        });
    },
  },
  modules: {},
});
