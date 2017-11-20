import Vue from 'vue';
import vuexI18n from 'vuex-i18n';
import store from '../store/store';

import es from './es.json';
import en from './en.json';

// module languages
import esBookstore from './bookstore/es.json';
import enBookstore from './bookstore/en.json';

export default {
    configure() {
        Vue.use(vuexI18n.plugin, store);

        Vue.i18n.add('en', Object.assign(
            {},
            en,
            // add modules of en in i18n
            enBookstore,
        ));
        Vue.i18n.add('es', Object.assign(
            {},
            es,
            // add modules of es in i18n
            esBookstore,
        ));

        Vue.i18n.set('es');
    },
};
