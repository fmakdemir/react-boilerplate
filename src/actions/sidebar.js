const openSidebarAction = () => {
	return {type: 'SIDEBAR', open: true};
};

const closeSidebarAction = () => {
	return {type: 'SIDEBAR', open: false};
};

export {openSidebarAction, closeSidebarAction};
