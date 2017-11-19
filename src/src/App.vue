
<template>
  <v-app id="inspire">
    <layout-menu></layout-menu>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <layout-footer></layout-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
  };
</script>



