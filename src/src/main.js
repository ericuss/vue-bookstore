// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import vuexI18n from 'vuex-i18n';
import i18nWrapper from './localizations/i18nwrapper';

import App from './App';

import Menu from './layout/Menu';
import MenuItem from './layout/Menu.item';
import Footer from './layout/Footer';
import TextControl from './components/controls/Text';
// import Book from './components/bookStore/book'; // remove 

import router from './router';
import store from './store/store';

import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(vuexI18n.plugin, store);
i18nWrapper.configure(Vue);

Vue.component('layout-menu', Menu);
Vue.component('layout-menu-item', MenuItem);
Vue.component('layout-footer', Footer);
Vue.component('v-text', TextControl);


/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: {
		App
	},
});
