export const personNames = [
	'Hassan Golden',
	'Don Sibley',
	'Jabari Velazquez',
	'Rayne Banuelos',
	'Rory Benedict',
	'Shaun Hawley',
	'Madalyn Chester',
	'Marisol Purvis',
	'Raven Norwood',
	'Sincere Troyer'
];

export const persons = personNames.map((name, index) => ({
	id: index + 1,
	name
}));
