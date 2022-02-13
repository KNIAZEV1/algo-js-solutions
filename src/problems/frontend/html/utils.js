const fs = require('fs');
const path = require('path');

export class DOMTestEnv {
	constructor(fileName) {
		jest.dontMock('fs');
		this.html = fs.readFileSync(
			path.resolve(__dirname, `./${fileName}/solution.html`),
			'utf8'
		);
	}

	isElement(el) {
		return el instanceof Element;
	}

	resetDom() {
		document.documentElement.innerHTML = this.html.toString();
	}
}
