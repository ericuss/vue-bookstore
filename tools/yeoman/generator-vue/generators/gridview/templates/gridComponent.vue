<template>
    <v-card class="cent-per-cent-wd">
        <v-card-title>
            <h3><v-text dark :text="'<%= moduleName %>.Sample'"></v-text></h3>
            <v-spacer></v-spacer>
            <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
            ></v-text-field>
        </v-card-title>
        
        <v-data-table :headers="headers"
                fluid
                :items="items"
                item-key="name"
                v-bind:search="search"
                class="elevation-1 cent-per-cent-wd">
            <template slot="items" slot-scope="props">
                <tr  >
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-right">
                        <v-btn dark     
                            fab                      
                            small 
                            color="blue accent-3 elevation-1" 
                            v-on:click="add">
                                <v-icon color="white">edit</v-icon>
                            </v-btn>
                    </td>
                </tr>
            </template>            
            <template slot="no-data">
                <v-alert :value="true" color="error" icon="warning">
                    Sorry, nothing to display here :(
                </v-alert>
            </template>    
        </v-data-table>
    </v-card>
</template>
<script>
    import getters from 'store/getter-types';

    export default {
        data() {
            return {
                search: '',
                items: this.$store.getters[getters.Sample.SAMPLE_GETTER],
                headers: [
                    {
                        text: 'Name',
                        value: 'name',
                        align: 'left',
                    },
                    {
                        text: '',
                        value: 'id',
                        align: 'right',
                        sortable: false,
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    .cent-per-cent-wd {
        width: 100%;
    }
</style>