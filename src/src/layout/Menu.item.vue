<template>
  <v-list-tile @click="">
    <v-list-tile-action>
      <v-icon>{{icon}}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{name}}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'layout-menu-item',
  props:['name', 'icon'],
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
