import { useState } from 'react';
import styles from './App.module.css';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import users from './users';
import MessagesSection from './components/MessagesSection';

export default function App() {
	const [connectionUsers] = useState(users);

	return (
		<main className={styles.app}>
			<section>
				<div className={styles.header}>
					<h4>New Connections</h4>
					<Badge text='2' variant='accent' />
				</div>

				<div className={styles.new_connections_container}>
					{connectionUsers.map(({ username, avatarSrc }, index) => (
						<div className={styles.connection} key={username}>
							<Avatar src={avatarSrc} alt={`${username}'s avatar`} />
							<small>{username}</small>
						</div>
					))}
				</div>
			</section>

			<MessagesSection users={connectionUsers} />
		</main>
	);
}
