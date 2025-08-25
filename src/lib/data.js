export const personNames = [
	'Alexander Hernández',
	'Migdalia Torres',
	'Susej Hernández',
	'Adriana Camargo',
	'Betty',
	'Sharon Pérez',
	'Josué Licona',
	'Javier',
	'Laura Zamora',
	'Liliana Zamora',
	'Emilin Beltrán',
	'Jonattan Lalinde'
];

export const persons = personNames.map((name, index) => ({
	id: index + 1,
	name
}));
