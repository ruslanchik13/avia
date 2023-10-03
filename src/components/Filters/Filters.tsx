import classes from './Filters.module.scss';
import useFilter from '../../hooks/useFilter';

function Filters() {
	const { active, handleOptimal, handleFaster, handleCheaper } = useFilter();

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
