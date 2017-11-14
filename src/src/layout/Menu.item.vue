<template>
  <v-list-tile :to="link" >
    <v-list-tile-action>
      <v-icon class="blue-grey--text">{{icon}}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title class="blue-grey--text">
          <v-text :text="name"></v-text>
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'layout-menu-item',
  props:['name', 'icon', 'link'],
  data() {
    return {
      // name: 'default name',
      // icon: 'default icon',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
