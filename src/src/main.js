// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import i18nWrapper from './localizations/i18nwrapper';

import App from './App';

import Menu from './layout/Menu';
import MenuItem from './layout/Menu.item';
import Footer from './layout/Footer';
import TextControl from './components/controls/Text';
import vuetable from './configurators/vuetable';

import router from './router';
import store from './store/store';

import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;

vuetable.configure();
Vue.use(Vuetify);
i18nWrapper.configure();

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
