export const INCREMENT_MUTATION = (state) => {
	const newState = Object.assign({}, state, { count: state.count + 1 });
	return newState;
};

export const ADD_BOOK_MUTATION = (state, book) => {
	state.books.push(book);
};
