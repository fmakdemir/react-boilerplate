const createNotifAction = (message) => {
	return {type: 'NOTIF', message};
};

const closeNotifAction = () => {
	return {type: 'NOTIF'};
};

export {createNotifAction, closeNotifAction};
