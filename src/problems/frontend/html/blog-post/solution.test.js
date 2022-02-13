const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(
	path.resolve(__dirname, './solution.html'),
	'utf8'
);
const isElement = (el) => el instanceof Element;

jest.dontMock('fs');

describe('blog post', () => {
	beforeEach(() => {
		document.documentElement.innerHTML = html.toString();
	});
	describe('markup', () => {
		it('has correct text', () => {
			const expectedTextContent =
				"Introducing AlgoCoin The future of \
decentralized meme currency is here. What is AlgoCoin? AlgoCoin utilizes \
a revolutionary proof-of-inverted-binary-tree consensus algorithm that \
will absolutely transform the way we think about currency and catapult \
the metaverse to its next major stage: Web 4.0. Using AlgoCoin is simple. \
Instead of hoarding capital in wallets with forgotten passwords, earn \
AlgoCoin at the time of usage through our unique point-of-sale system. \
Each inverted binary tree equates to one AlgoCoin. This means if your \
chicken tenders cost 420 AlgoCoin, all you need to do is invert 420 \
binary trees. Where Do I Start? Getting started with AlgoCoin is as \
easy as reversing a linked list. We recommend starting out by practicing \
on AlgoExpert. Next, once you feel you can invert binary trees as well \
as an Ex-FAANG 10x engineer, it's time to ditch your fiat currency and \
enter the future. Copyright 3022 AlgoCoin. All rights reserved.";
			expect(document.body.textContent.replace(/\s\s+/g, ' ').trim()).toEqual(
				expectedTextContent
			);
		});

		it('has correct top level heading', () => {
			const heading = document.querySelector('h1');
			expect(heading.textContent.trim()).toEqual('Introducing AlgoCoin');
		});

		it('has correct secondary headings', () => {
			const headings = document.querySelectorAll('h2');
			expect(headings[0].textContent.trim()).toEqual('What is AlgoCoin?');
			expect(headings[1].textContent.trim()).toEqual('Where Do I Start?');
		});

		it('uses strong tag correctly', () => {
			const strongs = document.querySelectorAll('strong');
			expect(strongs.length).toEqual(1);
			expect(strongs[0].textContent.trim()).toEqual(
				'proof-of-inverted-binary-tree consensus algorithm'
			);
		});

		it('uses emphasis tag correctly', () => {
			const ems = document.querySelectorAll('em');
			expect(ems.length).toEqual(1);

			// Allows period inside or outside of emphasis tag
			expect(ems[0].textContent.trim().replace(/\.$/, '')).toEqual('Web 4.0');
		});

		it('uses anchor tag correctly', () => {
			const anchors = document.querySelectorAll('a');
			expect(anchors.length).toEqual(1);

			// Allows period inside or outside of anchor tag
			expect(anchors[0].textContent.trim().replace(/\.$/, '')).toEqual(
				'AlgoExpert'
			);

			expect(anchors[0].href).toEqual('https://algoexpert.io/');
			expect(anchors[0].target).toEqual('_blank');
		});

		it('uses hr tag between sections', () => {
			const hr = document.querySelector('hr');
			expect(isElement(hr)).toBe(true);
			expect(
				hr.previousElementSibling.textContent
					.replace(/\s\s+/g, ' ')
					.trim()
					.endsWith('all you need to do is invert 420 binary trees.')
			).toBe(true);
			expect(
				hr.nextElementSibling.textContent
					.replace(/\s\s+/g, ' ')
					.trim()
					.startsWith('Where Do I Start?')
			).toBe(true);
		});

		it('uses article semantic grouping tag', () => {
			const article = document.querySelector('article');
			console.log('article', article);
			expect(isElement(article)).toBe(true);
		});

		it('uses semantic grouping tags correctly for header', () => {
			const header = document.querySelector('article > header');
			expect(header.textContent.replace(/\s\s+/g, ' ').trim()).toEqual(
				'Introducing AlgoCoin The future of decentralized meme currency is here.'
			);
		});

		it('uses semantic grouping tags correctly for sections', () => {
			const sectionGroupings = document.querySelectorAll(
				'article > section, article > article'
			);
			expect(sectionGroupings.length).toEqual(2);

			// Each section should have a heading inside of the section
			Array.from(sectionGroupings).forEach((group) => {
				const headings = group.querySelectorAll('h1, h2, h3, h4, h5, h6');
				expect(headings.length).toEqual(1);
			});
		});

		it('uses semantic grouping tags correctly for footer', () => {
			const footer = document.querySelector('footer');
			expect(footer.textContent.trim()).toEqual(
				'Copyright 3022 AlgoCoin. All rights reserved.'
			);
		});
	});
});
