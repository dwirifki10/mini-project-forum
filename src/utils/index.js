export const getCategory = (params) => {
	switch (Number(params)) {
		case 1:
			return "Entertainment";
		case 2:
			return "Arts";
		case 3:
			return "Technology";
		case 4:
			return "Sport";
		case 5:
			return "Education";
		default:
			return "All";
	}
};

export const getDate = () => {
	var today = new Date();
	var date =
		today.getFullYear() +
		"-" +
		(today.getMonth() + 1) +
		"-" +
		today.getDate();
	return date;
};
