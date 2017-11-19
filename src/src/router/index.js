import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import BookStore from '@/components/modules/bookStore/cards-view/Bootstrapper.BookStore';
import BookStoreCrud from '@/components/modules/bookStore/bookstore-crud/Bookstore-crud-bootstrapper';

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
		{
			path: '/BookstoreCrud',
			name: 'BookstoreCrud',
			component: BookStoreCrud,
		},
	],
});
