<template>
  <div>
    <h2 class="blue-grey--text text--darken-1" >
      <v-text dark :text="'Bookstore.Library'"></v-text>
    </h2>
    <!-- <button v-on:click="addBook">Add book</button> -->
    <v-layout wrap class="show-overflow"> <!-- row wrap> -->
      <v-flex v-for="book in books" :key="book.id" class="book">
        <book :name="book.name" :year="book.year" :authorName="book.authorName" :href="book.href" v-on:showEdition="showEdition" ></book> <!---:bookEdition="bookEdition"-->
      </v-flex>
    </v-layout>


    <v-btn
      fab
      bottom
      right
      dark
      float
      color="green lighten-1" 
      fixed
      v-on:click="addBook">
        <v-icon large color="white">add</v-icon>
    </v-btn>
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
.book{
  max-width: 15vw;
  width: 15vw;
}

.show-overflow{
  overflow-y: auto;
  height: 100%;
}
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
