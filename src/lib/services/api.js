import { personNames } from '../data';

/**
 * Retorna una lista de personas
 * @returns {Promise<Person[]>}
 */
export async function getPersons() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				personNames.map((name, index) => ({
					id: index,
					name
				}))
			);
		}, 2000);
	});
}
