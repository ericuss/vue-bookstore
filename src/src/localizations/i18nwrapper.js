import Vue from 'vue';
import vuexI18n from 'vuex-i18n';
import store from '../store/store';

import es from './es.json';
import esBookstore from './bookstore/es.json';

import en from './en.json';
import enBookstore from './bookstore/en.json';

export default {
    configure() {
        Vue.use(vuexI18n.plugin, store);
        Vue.i18n.add('en', Object.assign({}, en, enBookstore));
        Vue.i18n.add('es', Object.assign({}, es, esBookstore));
        Vue.i18n.set('es');
    },
};
