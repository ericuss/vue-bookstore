import * as mutationTypes from './mutation-types';

export const ADD_SAMPLE_ACTION = (state, sample_entity) => {
	state.commit(mutationTypes.ADD_SAMPLE_MUTATION, sample_entity);
};
