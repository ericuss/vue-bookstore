<template>
  <div>
    <h1>{{msg}} blablabla {{books}}</h1>
    <button v-on:click="addBook">Add book</button>
  </div>
</template>

<script>
import actions from 'store/action-types';
import getters from 'store/getter-types';

export default {
  name: 'hello',
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
