import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSearchId, fetchTickets } from '../../store/reducers/ticketsSlice';
import Card from '../Card/Card';
import classes from './CardList.module.scss';

function CardList() {
	const dispatch = useAppDispatch();
	const {
		searchId,
		isStop,
		pagination,
		filteredTickets,
		loading,
		tickets,
		error,
	} = useAppSelector((state) => state.tickets);

	useEffect(() => {
		if (!searchId) dispatch(fetchSearchId());
	}, [dispatch, searchId]);

	useEffect(() => {
		// let timer: string | number | NodeJS.Timeout | undefined;
		if (!isStop && searchId && loading !== 'pending') {
			// timer = setTimeout(() => {
			dispatch(fetchTickets());
			// }, 100);
		}
		// return () => {
		// 	clearTimeout(timer);
		// };
	}, [searchId, isStop, tickets, error]);

	return (
		<div className={classes.main}>
			{!isStop && <div>Loading...</div>}
			{filteredTickets.length === 0 && (
				<div className={classes.error}>
					Рейсов, подходящих под заданные фильтры, не найдено
				</div>
			)}
			{filteredTickets &&
				filteredTickets
					.slice(0, pagination)
					.map((item) => (
						<Card
							key={Math.random()}
							price={item.price}
							carrier={item.carrier}
							segments={item.segments}
						/>
					))}
		</div>
	);
}

export default CardList;
