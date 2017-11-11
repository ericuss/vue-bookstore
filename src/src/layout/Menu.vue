<template>
 <v-navigation-drawer 
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense v-for="menuItem in menuItems">
        <layout-menu-item :icon="menuItem.icon" :name="menuItem.text"></layout-menu-item>
        <!-- <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>Home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>Book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bookstore</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
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
        {icon: 'Home', text: 'Home'},
        {icon: 'Book', text: 'Bookstore'}
        ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
