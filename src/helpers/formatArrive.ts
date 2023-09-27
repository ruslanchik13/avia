import formatMinutes from './formatMinutes';

const formatArrive = (minutes: number) => {
	const { hours, min } = formatMinutes(minutes);

	return `${hours}ч ${min}м`;
};

export default formatArrive;
