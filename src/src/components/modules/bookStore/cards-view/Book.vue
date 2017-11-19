<template>
    <v-flex d-flex xs12 offset-sm1 class="mb-4 book-flex">
        <v-card  >
            <v-card-title primary-title class="pa-0">
                <v-btn fab absolute top left small color="red text-lg-right delete" >
                    <v-icon small color="white">delete</v-icon>
                </v-btn>
                <v-subheader  class="truncate">{{name}}</v-subheader>
            </v-card-title>
            <v-card-media :src="href" height="250px" xs12>
                <v-btn fab absolute right small color="indigo text-lg-right" @click.stop="showEdition">
                    <v-icon large color="white">zoom_in</v-icon>
                </v-btn>
                <!-- <span>{{name}}</span> -->
            </v-card-media>
            <v-card-actions>
                <v-subheader right>{{year}}</v-subheader>
                <span>{{authorName}}</span>
                <!-- <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn> -->
                <!-- <v-btn flat color="primary" dark @click.stop="dialog2 = true">Open Dialog 2</v-btn> -->
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>    
export default {
    props: {
        name: { type: String, default: "" },
        year:  { type: Number, default: 0 },
        authorName:  { type: String, default: "" },
        href: {type: String, default: ""},
    },
    methods: {
        'showEdition': function() {
            const book = this.mapToModal();
            this.$emit('showEdition', book);
        }, 
        mapToModal(){
            return { name: this.name, year: this.year, authorName: this.authorName, href: this.href };
        }
    },
}
</script>

<style scoped>
   .book-flex:hover .delete{
       display: block;
    }
    .book-flex .delete{
       display: none;
    }

    .truncate{
        /* max-width: 100%; */
        margin-right: 10px; 
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .flex{
        max-width: 100px;
    }
</style>

