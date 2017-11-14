<template>
  <div>
    <h1>{{msg}} blablabla </h1>
    <h2> <span>{{ $t('Library') }}</span></h2>
    <!-- <button v-on:click="addBook">Add book</button> -->
    <v-btn fab  color="indigo" v-on:click="addBook">
      <v-icon large color="white">add</v-icon>
    </v-btn>
    <v-layout wrap> <!-- row wrap> -->
      <v-flex v-for="book in books">
        <book :name="book.name" :year="book.year" :authorName="book.authorName" :href="book.href" v-on:showEdition="showEdition" ></book> <!---:bookEdition="bookEdition"-->
      </v-flex>
    </v-layout>

    <book-editor :bookEdition="bookEdition" :bookForEdit="bookForEdit" v-on:hideEdition="hideEdition"></book-editor>
  </div>
</template>

<script>
import actions from 'store/action-types';
import getters from 'store/getter-types';

// components
import BookComponent from './Book';
import BookModalEditorComponent from './Book.Editor';


export default {
  name: 'bookstore',
  data() {
    return {
      msg: 'Hello world',
      store: this.$store,
      bookEdition: false,
      bookForEdit: {}
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
    },
    showEdition(book){
      this.bookEdition = true;
      this.bookForEdit = book;
    },
    hideEdition(book){
      this.bookEdition = false;
      this.bookForEdit = {};
    }
  },
  components:{
    book: BookComponent,
    'book-editor': BookModalEditorComponent
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
