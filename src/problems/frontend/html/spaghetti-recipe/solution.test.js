import { DOMTestEnv } from '../utils';

const DOM = new DOMTestEnv('spaghetti-recipe');

describe('spaghetti recipe', () => {
	beforeEach(() => {
		DOM.resetDom();
	});

	describe('markup', () => {
		it('has correct text', () => {
			const expectedTextContent =
				'Spaghetti Recipe Ingredients Spaghetti Marinara \
Sauce Salt Water Instructions Bring water to a boil. Add spaghetti to boiling \
water. Add salt to taste. Cook for 10 minutes, stirring occasionally. \
Add marinara sauce to a pan, bringing to a simmer. Mix cooked spaghetti \
with marinara sauce. Enjoy!';
			expect(document.body.textContent.replace(/\s\s+/g, ' ').trim()).toEqual(
				expectedTextContent
			);
		});

		it('has correct top level heading', () => {
			const heading = document.querySelector('h1');
			expect(heading.textContent.trim()).toEqual('Spaghetti Recipe');
		});

		it('has correct secondary headings', () => {
			const headings = document.querySelectorAll('h2');
			expect(headings[0].textContent.trim()).toEqual('Ingredients');
			expect(headings[1].textContent.trim()).toEqual('Instructions');
		});

		it('has correct ingredients list', () => {
			const ul = document.querySelector('ul');
			expect(ul.children.length).toEqual(4);
			const expectedItems = ['Spaghetti', 'Marinara Sauce', 'Salt', 'Water'];
			Array.from(ul.children).forEach((child, i) => {
				expect(child.textContent.trim()).toEqual(expectedItems[i]);
			});
		});

		it('has correct instructions list', () => {
			const instructionsListItems = document.querySelectorAll('ol li');
			expect(instructionsListItems.length).toEqual(7);
			const expectedItems = [
				'Bring water to a boil.',
				'Add spaghetti to boiling water.',
				'Add salt to taste.',
				'Cook for 10 minutes, stirring occasionally.',
				'Add marinara sauce to a pan, bringing to a simmer.',
				'Mix cooked spaghetti with marinara sauce.',
				'Enjoy!',
			];
			Array.from(instructionsListItems).forEach((listItem, i) => {
				const text = listItem.childNodes[0].textContent.trim();
				expect(text).toEqual(expectedItems[i]);
			});
		});

		it('lists only contain list item children', () => {
			const lists = document.querySelectorAll('ol, ul');
			Array.from(lists).forEach((list) => {
				Array.from(list.children).forEach((listItem) => {
					expect(listItem.tagName).toEqual('LI');
				});
			});
		});

		it('nested instructions have correct markup', () => {
			const listItem = document.querySelectorAll('ol li')[1];
			const childNodes = listItem.childNodes;
			expect(childNodes[0].nodeType).toEqual(3); // Text node
			expect(childNodes[1].tagName).toEqual('OL');
			expect(childNodes[1].children.length).toEqual(2);
			const nestedListItems = Array.from(childNodes[1].children);

			const expectedItems = [
				'Add salt to taste.',
				'Cook for 10 minutes, stirring occasionally.',
			];

			nestedListItems.forEach((listItem, i) => {
				expect(listItem.tagName).toEqual('LI');
				expect(listItem.textContent).toEqual(expectedItems[i]);
			});
		});

		it('uses semantic grouping tags correctly', () => {
			const mainGrouping = document.querySelector('article, main');
			expect(DOM.isElement(mainGrouping)).toBe(true);

			const sectionGroupings = mainGrouping.querySelectorAll(
				'article, section'
			);
			expect(sectionGroupings.length).toEqual(2);

			// Each section should have a heading inside of the section
			Array.from(sectionGroupings).forEach((group) => {
				const headings = group.querySelectorAll('h1, h2, h3, h4, h5, h6');
				expect(headings.length).toEqual(1);
			});

			// Both top level lists should be nested inside of a semantic grouping
			// tag, but not the same semantic grouping tag
			const lists = document.querySelectorAll(
				'article > ul, section > ul, article > ol, section > ol'
			);
			expect(lists.length).toEqual(2);

			expect(lists[0].parentNode).not.toEqual(lists[1].parentNode);
		});
	});
});
