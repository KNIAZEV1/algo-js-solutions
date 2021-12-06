import { HashTable } from './HashTable';

function getHT(size = 10) {
	const ht = new HashTable(size);

	ht.set('maroon', '#800000');
	ht.set('yellow', '#FFFF00');
	ht.set('olive', '#808000');
	ht.set('salmon', '#FA8072');
	ht.set('lightcoral', '#F08080');
	ht.set('mdeiumvioletred', '#C71585');
	ht.set('pinky-pinky', '#DDA0DD');

	return ht;
}

const EXPECTED_HT = [
	,
	,
	[['yellow', '#FFFF00']],
	[['olive', '#808000']],
	[['salmon', '#FA8072']],
	[
		['lightcoral', '#F08080'],
		['mdeiumvioletred', '#C71585'],
	],
	[['maroon', '#800000']],
	,
	,
	[['pinky-pinky', '#DDA0DD']],
];

const EXPECTED_KEYS = [
	'yellow',
	'olive',
	'salmon',
	'lightcoral',
	'mdeiumvioletred',
	'maroon',
	'pinky-pinky',
];

const EXPECTED_VALUES = [
	'#FFFF00',
	'#808000',
	'#FA8072',
	'#F08080',
	'#C71585',
	'#800000',
	'#DDA0DD',
];

describe('HashTable', () => {
	describe('hash', () => {
		it('should return a valid list', () => {
			const ht = new HashTable(10);

			expect(ht.hash('yellow')).toEqual(2);
			expect(ht.hash('olive')).toEqual(3);
			expect(ht.hash('lightcoral')).toEqual(5);
			expect(ht.hash('pinky-pinky')).toEqual(9);
		});
	});
	describe('set', () => {
		it('should return a valid list', () => {
			const ht = getHT();

			expect(ht.keyMap).toEqual(EXPECTED_HT);
		});
	});
	describe('get', () => {
		it('should return a valid item', () => {
			const ht = getHT();

			expect(ht.get('olive')).toEqual(['olive', '#808000']);
			expect(ht.get('lightcoral')).toEqual(['lightcoral', '#F08080']);
			expect(ht.get('pinky-pinky')).toEqual(['pinky-pinky', '#DDA0DD']);
		});
	});
	describe('keys', () => {
		it('should return a valid keys list', () => {
			const ht = getHT();

			expect(ht.keys()).toEqual(EXPECTED_KEYS);
		});
	});
	describe('values', () => {
		it('should return a valid values list', () => {
			const ht = getHT();

			expect(ht.values()).toEqual(EXPECTED_VALUES);
		});
	});
});
