<template>
    <v-dialog v-model="bookEdition">
        <v-card>
            <v-card-title primary-title>
                <v-subheader wrap class="headline mb-0">{{name}}</v-subheader>
            </v-card-title>
            <v-card-media :src="href" height="200px" xs12>
            </v-card-media>
            <v-card-actions>
                <v-subheader right>{{year}}</v-subheader>
                <span>{{authorName}}</span>
                <v-btn color="primary" flat @click.stop="hideEdition">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
props: {
    bookEdition: { type: Boolean, default: false },
    bookForEdit: { type: Object },
},
data() {
    return {
        name: '',
        year: 0,
        authorName: '',
        href: '',
    };
},
watch: {
    bookForEdit() {
        this.name = this.bookForEdit.name || '';
        this.year = this.bookForEdit.year || '';
        this.authorName = this.bookForEdit.authorName || '';
        this.href = this.bookForEdit.href || '';
    },
},
methods: {
    hideEdition() {
        // const book = this.mapToModal();
        this.$emit('hideEdition');
    },
    mapToModal() {
        return { name: this.name, year: this.year, authorName: this.authorName, href: this.href };
    },
},
};
</script>

<style scoped>
    .flex{
        max-width: 100px;
    }
</style>

