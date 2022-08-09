import { FaSearch } from 'react-icons/fa';
import { ConnectionUser } from '../../users';
import Avatar from '../Avatar';
import Badge from '../Badge';
import styles from './MessagesSection.module.css';

export interface MessagesSectionProps {
	users: ConnectionUser[];
}

export default function MessagesSection({ users }: MessagesSectionProps) {
	return (
		<section className={styles.messages_container}>
			<div className={styles.messages_container__header}>
				<div className='flex'>
					<h4>Messages</h4>
					<Badge text='1' variant='accent' />
				</div>

				<label htmlFor='search' className={styles.search_bar}>
					<FaSearch />
					<input id='search' type='text' name='search' placeholder='Search' />
				</label>
			</div>

			<main className={styles.message_blocks_container}>
				{users.map(
					({
						avatarSrc,
						username,
						latestMessage,
						name,
						numOfUnreadMessages,
					}) => (
						<div key={username} className={styles.message_block}>
							<div className={styles.message_block__avatar_container}>
								<Avatar src={avatarSrc} alt={`${username}'s avatar`} />
							</div>

							<div className={styles.message_block__content}>
								<div>
									<h3>{name}</h3>
									<time>
										{latestMessage?.time.toLocaleTimeString(undefined, {
											timeStyle: 'short',
										})}
									</time>
								</div>

								<div>
									<p>{latestMessage?.text}</p>
									{(numOfUnreadMessages || 0) > 0 && (
										<Badge variant='primary' text={`${numOfUnreadMessages}`} />
									)}
								</div>
							</div>
						</div>
					),
				)}
			</main>
		</section>
	);
}
