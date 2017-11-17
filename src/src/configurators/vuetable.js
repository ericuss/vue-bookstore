import Vue from 'vue';
import {install as vuetable} from 'VueTable-2';


export default {
    configure(){
        vuetable(Vue);
    }
};