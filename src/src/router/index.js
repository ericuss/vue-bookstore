import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import BookStore from '@/components/modules/bookStore/Bootstrapper.BookStore';

Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			name: 'Hello',
			component: Hello,
		},
		{
			path: '/BookStore',
			name: 'BookStore',
			component: BookStore,
		},
	],
});
