import classNames from 'classnames';
import { type ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

export default function Avatar(imgProps: ImgHTMLAttributes<HTMLImageElement>) {
	return (
		<div className={styles.avatar_container}>
			<img
				{...imgProps}
				className={classNames(styles.avatar_container__img, imgProps.className)}
			/>
		</div>
	);
}
