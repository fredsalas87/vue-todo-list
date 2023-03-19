<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer" 
    app
    >
    <v-img
      src="./assets/pg.jpg"
      dark
      gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
      class="pt-5 text-center"
    >
      <v-avatar
        size="100"
      >
        <img
          src="./assets/Web Dev Google Sunset Web conheça.jpg"
          alt="dev"
        >
      </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js
          </v-list-item-title>
          <v-list-item-subtitle>
            Lista de tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      color="#fcb69f"
      dark
      src="./assets/pg.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: false,
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Sobre', icon: 'mdi-help-box', to: '/sobre' },
        ],
    }),
  }
</script>