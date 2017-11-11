<template>
  <div>
    <h1>{{msg}} blablabla {{books}}</h1>
    <!-- <button v-on:click="addBook">Add book</button> -->
    <v-btn fab  color="indigo" v-on:click="addBook">
      <v-icon large color="white">add</v-icon>
    </v-btn>
    <v-layout>

      <div v-for="book in books">
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </div>
    </v-layout>
  </div>
</template>

<script>
import actions from 'store/action-types';
import getters from 'store/getter-types';

export default {
  name: 'bookstore',
  data() {
    return {
      msg: 'Hello world' + this.$store.getters[getters.book.BOOKS],
      store: this.$store,
    };
  },
  computed: {
    books: function(){
      return this.$store.getters[getters.book.BOOKS];
    }
  },
  methods:{
    addBook(){
      // ADD_BOOK(store, 22);
      this.$store.dispatch(actions.book.ADD_BOOK, 22); //"ADD_BOOK", 22);

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
