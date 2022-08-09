export interface Message {
	text: string;
	time: Date;
}

export interface ConnectionUser {
	name: string;
	username: string;
	avatarSrc: string;
	isIncognito?: boolean;
	latestMessage?: Message;
	numOfUnreadMessages?: number;
}

export const avatars: ConnectionUser['avatarSrc'][] = [
	'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTkyMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1615473967657-9dc21773daa3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTkyNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1506633541287-7c7544a7a706?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTkzMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTkzOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk1Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk3MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1506633541287-7c7544a7a706?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk3OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1496302662116-35cc4f36df92?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk4NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
	'https://images.unsplash.com/photo-1561406636-b80293969660?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY1OTk2OTk5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300',
];

const users: ConnectionUser[] = [
	{
		name: 'Sweet Potato',
		username: 'angrycar',
		latestMessage: "Let's catch upover dinner at around 5pm?",
	},
	{
		name: 'Angelina',
		username: 'fastapple',
		latestMessage: 'Where have you been?',
	},
	{
		name: 'Hungry Dog',
		username: 'fastappccale',
		latestMessage: 'Nope',
	},
	{
		name: 'Another Person',
		username: 'person',
		latestMessage: 'Okay',
	},
	{
		name: 'Sweet Potato',
		username: 'angrycar',
		latestMessage: "Let's catch upover dinner at around 5pm?",
	},
	{
		name: 'Angelina',
		username: 'fastapple',
		latestMessage: 'Where have you been?',
	},
	{
		name: 'Hungry Dog',
		username: 'fastappccale',
		latestMessage: 'Nope',
	},
	{
		name: 'Another Person',
		username: 'person',
		latestMessage: 'Okay',
	},
	{
		name: 'Sweet Potato',
		username: 'angrycar',
		latestMessage: "Let's catch upover dinner at around 5pm?",
	},
	{
		name: 'Angelina',
		username: 'fastapple',
		latestMessage: 'Where have you been?',
	},
	{
		name: 'Hungry Dog',
		username: 'fastappccale',
		latestMessage: 'Nope',
	},
	{
		name: 'Another Person',
		username: 'person',
		latestMessage: 'Okay',
	},
	{
		name: 'Sweet Potato',
		username: 'angrycar',
		latestMessage: "Let's catch upover dinner at around 5pm?",
	},
	{
		name: 'Angelina',
		username: 'fastapple',
		latestMessage: 'Where have you been?',
	},
	{
		name: 'Hungry Dog',
		username: 'fastappccale',
		latestMessage: 'Nope',
	},
	{
		name: 'Another Person',
		username: 'person',
		latestMessage: 'Okay',
	},
].map((user, i) => ({
	...user,
	username: user.username + i,
	isIncognito: Math.floor(Math.random() * 2) === 1,
	latestMessage: { text: user.latestMessage, time: new Date() },
	avatarSrc: avatars[i % 13],
	numOfUnreadMessages: Math.floor(Math.random() * 4),
}));

export default users;
