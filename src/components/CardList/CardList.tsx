import { useEffect } from 'react';
import Card from '../Card/Card';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSearchId, fetchTickets } from '../../store/reducers/ticketsSlice';
import classes from './CardList.module.scss';

function CardList() {
	const dispatch = useAppDispatch();
	const { searchId, isStop, tickets, pagination, error, filteredTickets } =
		useAppSelector((state) => state.tickets);

	useEffect(() => {
		if (!searchId) dispatch(fetchSearchId());
	}, [dispatch, searchId]);

	useEffect(() => {
		if (!isStop && searchId) dispatch(fetchTickets());
	}, [dispatch, isStop, searchId, tickets, error]);

	return (
		<div className={classes.main}>
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
