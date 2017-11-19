import * as mutationTypes from './mutation-types';

export const INCREMENT = (state) => {
	
	state.commit(mutationTypes.INCREMENT_MUTATION, book);
	const newState = Object.assign(state, { count: state.count + 1 });
	return newState;
};

export const ADD_BOOK = (state, book) => {
	state.commit(mutationTypes.ADD_BOOK_MUTATION, book);
};
