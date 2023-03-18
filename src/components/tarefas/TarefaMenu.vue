<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
            <v-icon>
            mdi-dots-vertical
            </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
            <v-icon color="items.color" left>{{ item.icone }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditor 
        v-if="items[0].modal"
        @fechaModal = 'items[0].modal = false'
        :tarefa="tarefa"
    />
    <ModalDelete 
        v-if="items[1].modal"
        @fechaModal = 'items[1].modal = false'
        :tarefa="tarefa"
    />
  </div>
</template>

<script>
import ModalDelete from '../Modal/ModalDelete.vue'
import ModalEditor from '../Modal/ModalEditor.vue'
  export default {
    props: ['tarefa'],
    components: { ModalEditor, ModalDelete },
    data: () => ({
      items: [
        { icone: 'mdi-pencil', 
            title: 'Editar',
            modal: false, 
            color: 'green',
            click(){
                this.modal = true
            }
        },
        { icone: 'mdi-delete', 
            title: 'Excluir',
            modal: false,
            color: 'red',
            click(){
                this.modal = true
            }
        },
      ],
    }),
  }
</script>

<style>

</style>