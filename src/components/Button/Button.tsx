import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}

function Button({ children, onClick, ...rest }: ButtonProps) {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<button type="button" className={classes.btn} onClick={onClick} {...rest}>
			{children}
		</button>
	);
}

export default Button;
