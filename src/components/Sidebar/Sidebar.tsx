import classes from './Sidebar.module.scss';
import useSidebar from '../../hooks/useSidebar';

function Sidebar() {
	const { inputs } = useSidebar();

	return (
		<div className={classes.main}>
			<div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
			<div className={classes.boxes}>
				{inputs.map((item) => (
					<div key={item.id} className={classes.item}>
						<input
							id={item.id}
							className={classes.input}
							type="checkbox"
							onChange={item.func}
							checked={item.checked}
						/>
						<label className={classes.label} htmlFor={item.id}>
							{item.label}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
