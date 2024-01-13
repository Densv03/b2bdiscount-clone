import {
	Inject,
	Injectable,
	InjectionToken,
	Optional,
	Renderer2,
	RendererFactory2,
} from '@angular/core';
import { APP_BASE_HREF, DOCUMENT, Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root',
})
export class SeoService {
	private renderer2: Renderer2;
	private marketListingMetaSource: BehaviorSubject<{
		[key: string]: any;
	} | null> = new BehaviorSubject(null);

	constructor(
		private rendererFactory: RendererFactory2,
		@Inject(DOCUMENT) private doc: Document,
		private locationService: Location,
		private router: Router,
		private route: ActivatedRoute,
		private title: Title,
		private meta: Meta
	) {
		this.renderer2 = this.rendererFactory.createRenderer(null, null);
	}

	get marketListingMetaTags$(): Observable<{ [key: string]: any } | null> {
		return this.marketListingMetaSource.asObservable();
	}

	public updateMarketListingMeta(category: any): void {
		this.marketListingMetaSource.next(category);
	}

	public addBlogMicroMarkup(
		document: Document,
		urlAddress: string,
		blogName: string,
		datePublished: Date | string,
		dateModified: Date | string,
		images: unknown[],
		author: string,
		description: string
	): void {
		const script = this.renderer2.createElement('script');
		script.type = `application/ld+json`;
		script.id = 'micro-markup';

		script.text = `
            {
							"@context": "https://schema.org",
							"@type": "NewsArticle",
							"mainEntityOfPage": {
								"@type": "WebPage",
								"@id": "${
									(environment.apiUrl.includes('dev')
										? environment.devUrl
										: environment.prodUrl) + this.locationService.path()
								}"
							},
							"headline": "${blogName}",
							"image": "[${images}]",

							"datePublished": "${this.getDateForBlogMarkup(datePublished)}",
							"dateModified": "${this.getDateForBlogMarkup(dateModified)}",
							"author": {
   						"@type": "Person",
  						"name": "${author}"
  					},
   					 "publisher": {
 							"@type": "Organization",
						  "name": "",
 						  "url" : "${
								(environment.apiUrl.includes('dev')
									? environment.devUrl
									: environment.prodUrl) + this.locationService.path()
							}",
 							"logo": {
 							 "@type": "ImageObject",
 						   "url": "${images[2]}"
 						  }
						 },
						"description": "${description}"
						}
					}
        `;

		this.renderer2.appendChild(document.body, script);
	}

	public addCanonicalRef(): void {
		this.initCanonicalRef();
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				tap(() => {
					this.removeCanonicalRefs();
					this.initCanonicalRef();
				})
			)
			.subscribe();
	}

	public setTitle(title: string): void {
		this.title.setTitle(title);
	}

	public setDescription(content: string): void {
		this.meta.updateTag({
			name: 'description',
			content,
		});
	}

	private initCanonicalRef(): void {
		let link: HTMLLinkElement = this.doc.createElement('link');
		const index = this.doc.URL.indexOf('?');
		let url = index !== -1 ? this.doc.URL.substring(0, index) : this.doc.URL;
		// url = url.replace('http://', 'https://');
		link.setAttribute('rel', 'canonical');
		this.doc.head.appendChild(link);
		link.setAttribute('href', url);
	}

	private removeCanonicalRefs(): void {
		const head = document.getElementsByTagName('head')[0];
		const links = head.getElementsByTagName('link');
		for (let i = 0; i < links.length; i++) {
			const link = links[i];
			if (link.rel === 'canonical') {
				this.renderer2.removeChild(head, link);
			}
		}
	}

	private getDateForBlogMarkup(date: Date | string): string {
		if (typeof date === 'string') {
			date = new Date();
		}

		const isoString = date.toISOString(); // returns "2015-02-05T00:00:00.000Z"
		const dateString = isoString.slice(0, 10); // extract "YYYY-MM-DD" from isoString
		const timeString = isoString.slice(11, 19); // extract "HH:mm:ss" from isoString
		const offsetString = '+08:00'; // specify the desired time zone offset
		const formattedString = dateString + 'T' + timeString + offsetString; // concatenate the components
		return formattedString;
	}
}
