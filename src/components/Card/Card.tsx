import formatDates from '../../helpers/formatDates';
import formatArrive from '../../helpers/formatArrive';
import formatPrice from '../../helpers/formatPrice';
import { ITicket } from '../../types/types';
import classes from './Card.module.scss';

function Card({ price, carrier, segments }: ITicket) {
	return (
		<div className={classes.main}>
			<div className={classes.container}>
				<div className={classes.header}>
					<div className={classes.price}>{formatPrice(price)} P</div>
					<img src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
				</div>
				<div className={classes.body}>
					{segments.map((item) => (
						<div
							key={`${item.duration}_${item.date}`}
							className={classes.items}
						>
							<div className={classes.item}>
								<div className={classes.title}>
									{item.origin} - {item.destination}
								</div>
								<div className={classes.info}>
									{formatDates(item.date, item.duration)}
								</div>
							</div>
							<div className={classes.item}>
								<div className={classes.title}>В ПУТИ</div>
								<div className={classes.info}>
									{formatArrive(item.duration)}
								</div>
							</div>
							<div className={classes.item}>
								<div className={classes.title}>
									{item.stops.length} ПЕРЕСАДКИ
								</div>
								<div className={classes.stops}>{item.stops.join(', ')}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Card;
