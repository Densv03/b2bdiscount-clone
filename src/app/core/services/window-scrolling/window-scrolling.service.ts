import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class WindowScrollingService {
	private readonly styleTag: HTMLStyleElement;

	constructor() {
		this.styleTag = this.buildStyleElement();
	}

	public enable(): void {
		document.body.removeChild(this.styleTag);
	}

	public disable(): void {
		document.body.appendChild(this.styleTag);
	}

	private buildStyleElement(): HTMLStyleElement {
		const style = document.createElement('style');
		style.type = 'text/css';
		style.setAttribute('data-debug', 'Injected by WindowScrolling service.');
		style.textContent = `
			body {
				overflow: hidden !important ;
			}
		`;
		return style;
	}
}
