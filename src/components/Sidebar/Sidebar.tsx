import { useEffect, useState } from 'react';
import classes from './Sidebar.module.scss';
import {
	filterByTransfer,
	turnAllTransfers,
} from '../../store/reducers/ticketsSlice';
import { useAppDispatch } from '../../hooks/redux';

function Sidebar() {
	const [checked, setChecked] = useState({
		all: false,
		zero: false,
		one: false,
		two: false,
		three: false,
	});

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (checked.all) dispatch(turnAllTransfers());
		if (!checked.all)
			dispatch(
				filterByTransfer([
					{ number: 0, active: checked.zero },
					{ number: 1, active: checked.one },
					{ number: 2, active: checked.two },
					{ number: 3, active: checked.three },
				])
			);
	}, [checked, dispatch]);

	const handlerAll = () => {
		if (checked.all) {
			setChecked({
				zero: false,
				one: false,
				two: false,
				three: false,
				all: false,
			});
		} else {
			setChecked({
				zero: true,
				one: true,
				two: true,
				three: true,
				all: true,
			});
		}
	};

	return (
		<div className={classes.main}>
			<div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
			<div className={classes.boxes}>
				<div className={classes.item}>
					<input
						id="all"
						className={classes.input}
						type="checkbox"
						onChange={() => handlerAll()}
						checked={checked.all}
					/>
					<label className={classes.label} htmlFor="all">
						Все
					</label>
				</div>
				<div className={classes.item}>
					<input
						id="without"
						className={classes.input}
						type="checkbox"
						onChange={() =>
							setChecked({ ...checked, zero: !checked.zero, all: false })
						}
						checked={checked.zero}
					/>
					<label className={classes.label} htmlFor="without">
						Без пересадок
					</label>
				</div>
				<div className={classes.item}>
					<input
						id="1"
						className={classes.input}
						type="checkbox"
						onChange={() =>
							setChecked({ ...checked, one: !checked.one, all: false })
						}
						checked={checked.one}
					/>
					<label className={classes.label} htmlFor="1">
						1 пересадка
					</label>
				</div>
				<div className={classes.item}>
					<input
						id="2"
						className={classes.input}
						type="checkbox"
						onChange={() =>
							setChecked({ ...checked, two: !checked.two, all: false })
						}
						checked={checked.two}
					/>
					<label className={classes.label} htmlFor="2">
						2 пересадки
					</label>
				</div>
				<div className={classes.item}>
					<input
						id="3"
						className={classes.input}
						type="checkbox"
						onChange={() =>
							setChecked({ ...checked, three: !checked.three, all: false })
						}
						checked={checked.three}
					/>
					<label className={classes.label} htmlFor="3">
						3 пересадки
					</label>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
