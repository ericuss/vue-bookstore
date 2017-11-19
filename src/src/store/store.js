import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

import  bookModule from './Modules/books/storeModule';

Vue.use(Vuex);
// state,
// getters,
// mutations,
// actions
export default new Vuex.Store({
	modules:{
		book: bookModule,
	},
	state,
	getters,
	actions,
	mutations 
});
