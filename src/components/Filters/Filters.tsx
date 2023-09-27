import { useEffect, useState } from 'react';
import classes from './Filters.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
	sortCheaper,
	sortFaster,
	sortOptimal,
} from '../../store/reducers/ticketsSlice';

function Filters() {
	const [active, setActive] = useState(-1);
	const dispatch = useAppDispatch();
	const { checked } = useAppSelector((state) => state.tickets);

	const handleCheaper = () => {
		dispatch(sortCheaper());
		setActive(0);
	};

	const handleFaster = () => {
		dispatch(sortFaster());
		setActive(1);
	};

	const handleOptimal = () => {
		dispatch(sortOptimal());
		setActive(2);
	};

	useEffect(() => {
		if (active === 0) dispatch(sortCheaper());
		if (active === 1) dispatch(sortFaster());
		if (active === 2) dispatch(sortOptimal());
	}, [active, dispatch, checked]);

	return (
		<div className={classes.main}>
			<div
				role="presentation"
				className={active === 0 ? classes.active : classes.item}
				onClick={() => handleCheaper()}
			>
				САМЫЙ ДЕШЕВЫЙ
			</div>
			<div
				role="presentation"
				className={active === 1 ? classes.active : classes.item}
				onClick={handleFaster}
			>
				САМЫЙ БЫСТРЫЙ
			</div>
			<div
				role="presentation"
				className={active === 2 ? classes.active : classes.item}
				onClick={handleOptimal}
			>
				ОПТИМАЛЬНЫЙ
			</div>
		</div>
	);
}

export default Filters;
