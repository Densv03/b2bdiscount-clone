import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
	providedIn: 'root',
})
export class WindowScrollingService {
	private readonly styleTag: HTMLStyleElement;

	constructor(@Inject(DOCUMENT) private document: Document) {
		this.styleTag = this.buildStyleElement();
	}

	public enable(): void {
		this.document.body.removeChild(this.styleTag);
	}

	public disable(): void {
		this.document.body.appendChild(this.styleTag);
	}

	private buildStyleElement(): HTMLStyleElement {
		const style = this.document.createElement('style');
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
