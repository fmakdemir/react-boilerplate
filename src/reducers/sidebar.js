const notif = (state=false, action) => {
	switch (action.type) {
	case 'SIDEBAR':
		if (action.open === undefined) {
			action.open = !state;
		}
		return action.open;
	default:
		return state;
	}
};

export default notif;
