const notif = (state = { open: false, message: ''} , action) => {
	switch (action.type) {
	case 'NOTIF':
		if (action.message === undefined) {
			action.message = '';
		}
		return { open: action.message !== '', message: action.message };
	default:
		return state;
	}
};

export default notif;
