import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { pagination } from '../../store/reducers/ticketsSlice';
import Sidebar from '../../components/Sidebar/Sidebar';
import Filters from '../../components/Filters/Filters';
import CardList from '../../components/CardList/CardList';
import Button from '../../components/Button/Button';
import classes from './MainPage.module.scss';
import logo from '../../assets/img/logo.svg';

function MainPage() {
	const dispatch = useAppDispatch();
	const { filteredTickets } = useAppSelector((state) => state.tickets);

	return (
		<div className={classes.main}>
			<img className={classes.img} src={logo} alt="item" />
			<div className={classes.content}>
				<Sidebar />
				<div className={classes.right}>
					<Filters />
					<CardList />
					{filteredTickets.length !== 0 && (
						<Button onClick={() => dispatch(pagination())}>
							ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}

export default MainPage;
