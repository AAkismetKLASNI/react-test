import { useState } from 'react';

export const useRefresher = () => {
	const [refreshData, setRefreshData] = useState(false);
	const refresher = () => {
		setRefreshData(!refreshData);
	};

	return { refreshData, refresher };
};
