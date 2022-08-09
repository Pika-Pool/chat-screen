import { useMemo, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ConnectionUser } from '../../users';
import Avatar from '../Avatar';
import Badge from '../Badge';
import styles from './MessagesSection.module.css';

export interface MessagesSectionProps {
	users: ConnectionUser[];
}

export default function MessagesSection({ users }: MessagesSectionProps) {
	const [searchInput, setSearchInput] = useState('');

	const usersToRender = useMemo(
		() =>
			// searches in both user and username
			users
				.filter(user =>
					new RegExp(`.*${searchInput}.*`, 'gi').test(
						user.username + user.name,
					),
				)
				.sort((u1, u2) => {
					const t1 = u1.latestMessage.time;
					const t2 = u1.latestMessage.time;

					if (t1 !== t2) return t2.getTime() - t1.getTime();
					return u2.numOfUnreadMessages - u1.numOfUnreadMessages;
				}),
		[searchInput, users],
	);

	return (
		<section className={styles.messages_container}>
			<div className={styles.messages_container__header}>
				<div className='flex'>
					<h4>Messages</h4>
					<Badge text='1' variant='accent' />
				</div>

				<label htmlFor='search' className={styles.search_bar}>
					<FaSearch />
					<input
						id='search'
						type='text'
						name='search'
						placeholder='Search'
						value={searchInput}
						onChange={e => setSearchInput(e.target.value)}
					/>
				</label>
			</div>

			<main className={styles.message_blocks_container}>
				{usersToRender.map(
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
									{numOfUnreadMessages > 0 && (
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
