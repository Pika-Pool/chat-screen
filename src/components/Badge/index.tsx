import styles from './Badge.module.css';
import classNames from 'classnames';

interface BadgeProps {
	variant: 'primary' | 'accent';
	text: string;
}

export default function Badge({ variant, text }: BadgeProps) {
	return (
		<div className={classNames(styles.badge, styles[`badge--${variant}`])}>
			{text}
		</div>
	);
}
