// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';

import Menu from './layout/Menu';
import MenuItem from './layout/Menu.item';
import Footer from './layout/Footer';

import router from './router';
import store from './store/store';
import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;
Vue.use(Vuetify);

Vue.component('layout-menu', Menu);
Vue.component('layout-menu-item', MenuItem);
Vue.component('layout-footer', Footer);


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
