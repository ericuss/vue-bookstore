<template>
 <v-navigation-drawer 
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense v-for="menuItem in menuItems" :key="menuItem.text">
        <layout-menu-item :icon="menuItem.icon" :name="menuItem.text" :link="menuItem.link"></layout-menu-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
  name: 'layout-menu',
  props:['drawer'],
  data() {
    return {
      msg: 'Hello world',
      // drawer: true,
      menuItems: [
        { icon: 'Home', text: 'Home', link: '/' },
        { icon: 'Book', text: 'Bookstore.Library', link: 'Bookstore' }
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
