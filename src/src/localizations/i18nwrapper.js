import Vue from 'vue';
import vuexI18n from 'vuex-i18n';
import store from '../store/store';

import es from './es';
import es_bookstore from './bookStore/es';

import en from './en';
import en_bookstore from './bookStore/en';

export default {
    configure(){        
        Vue.use(vuexI18n.plugin, store);
        Vue.i18n.add('en', Object.assign({}, en, en_bookstore));
        Vue.i18n.add('es', Object.assign({}, es, es_bookstore));
        Vue.i18n.set('en');
    }
};