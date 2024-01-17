export const INITIAL_DATA = {
	values: {
		title: '',
		date: '',
		tag: '',
		content: ''
	},
	isValid: false
};

export function formReducer(state, action) {
	switch (action.type) {
	case 'SET_VALUE': {
		return {
			...state,
			values: {
				...state.values,
				...action.payload
			}
		};
	}
	case 'CHECK_VALID': {
		const titleValidity = state.values.title.trim().length >= 3;
		const dateValidity = state.values.date;
		const tagValidity = state.values.tag.trim().length;
		const contentValidity = state.values.content.trim().length >= 5;

		if (titleValidity && dateValidity && tagValidity && contentValidity) {
			return {
				...state,
				isValid: true
			};
		} else {
			return {
				...state,
				isValid: false
			};
		}
	}
	case 'CLEAR': {
		return {
			...INITIAL_DATA
		};
	}
	}
}