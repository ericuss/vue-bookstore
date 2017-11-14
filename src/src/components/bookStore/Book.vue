<template>
    <v-flex d-flex xs12 offset-sm2 class>
        <v-card  >
            <v-card-title primary-title>
                <v-btn fab absolute top right small color="indigo text-lg-right" @click.stop="showEdition">
                    <v-icon small color="white">edit</v-icon>
                </v-btn>
                <v-subheader wrap class="headline mb-0">{{name}}</v-subheader>
            </v-card-title>
            <v-card-media :src="href" height="200px" xs12>
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
        // showEdition: {type: Function }
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
//    ['name', 'year', 'authorName'],
    // data(){
    //     return {
    //         name: this.name,
    //         year: this.year,
    //         authorName: this.authorName
    //     };
    // }
}
</script>

<style scoped>
    .flex{
        max-width: 100px;
    }
</style>

