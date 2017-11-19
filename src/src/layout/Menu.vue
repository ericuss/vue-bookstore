<template>
  <div>
    <v-navigation-drawer 
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list v-for="menuItem in menuItems" :key="menuItem.text">
          <layout-menu-item :icon="menuItem.icon" :name="menuItem.text" :link="menuItem.link"></layout-menu-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue lighten-1" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><v-text :text="'Bookstore'"></v-text></v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'layout-menu',
  data() {
    return {
      msg: 'Hello world',
      drawer: null,
      menuItems: [
        { icon: 'home', text: 'Home', link: '/' },
        { icon: 'book', text: 'Bookstore.Library', link: 'Bookstore' },
        { icon: 'grid_on', text: 'Grid', link: 'BookstoreCrud' },
      ],
    };
  },
};
</script>
