import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2} from "@angular/core";
import {NgxChanges} from '../../../../shared/src/interfaces/on-changes.interface'
import {B2bNgxInputThemeEnum} from "../enum/ngx-input-theme.enum";
import {NgxInputVersionEnum} from "../enum/ngx-input-version.enum";
import {PlatformService} from "../../../../../src/app/client/services/platform/platform.service";

function isValueInEnum(value: string, enumArray: any): boolean {
	return Object.values(enumArray).includes(value);
}

@Directive({
	selector: "[b2bNgxInput]",
})
export class B2bNgxInputDirective implements OnInit, OnChanges {
	@Input() theme: B2bNgxInputThemeEnum = B2bNgxInputThemeEnum.BACKGROUND_WHITE;
	@Input() label: string = '';
	@Input() labelClass: string = '';
	@Input() version: NgxInputVersionEnum = NgxInputVersionEnum.B2B;
	@Input() wrapperClass: string = '';

	wrapper: ElementRef;

	constructor(private readonly _renderer2: Renderer2, private readonly _elementRef: ElementRef, private readonly platformService: PlatformService) {
	}

	get inputClass() {
		return this.version === NgxInputVersionEnum.B2B ? 'b2b-ngx-input' : 'globy-ngx-input';
	}

	get defLabelClass() {
		return this.version === NgxInputVersionEnum.B2B ? 'b2b-ngx-input-label' : 'globy-ngx-input-label';
	}

	ngOnInit() {
		this.handleClasses();
	}

	ngOnChanges(changes: NgxChanges<B2bNgxInputDirective>) {
		if (!changes.theme?.currentValue && changes.theme?.previousValue) {
			this._renderer2.removeClass(this._elementRef.nativeElement, changes.theme.previousValue);
		}
		if (changes.theme && isValueInEnum(changes.theme.currentValue, B2bNgxInputThemeEnum)) {
			const {currentValue} = changes.theme;
			const category = currentValue.split("-")[0];

			this._renderer2.addClass(this._elementRef.nativeElement, category);
			this._renderer2.addClass(this._elementRef.nativeElement, currentValue);
		}

		if (changes.label && this.version === NgxInputVersionEnum.B2B) {
			const {nativeElement} = this._elementRef;
			const {parentElement} = nativeElement;

			const labelElement = this._renderer2.createElement("span");
			const labelText = this._renderer2.createText(this.label);

			this._renderer2.appendChild(labelElement, labelText);
			this._renderer2.addClass(labelElement, this.defLabelClass);

			if (!!this.labelClass) {
				this._renderer2.addClass(labelElement, this.labelClass);
			}
			this._renderer2.insertBefore(parentElement, labelElement, nativeElement);
		}
	}

	private handleClasses() {
		if (this.platformService.isBrowser) {
			if (this.version === NgxInputVersionEnum.B2B) {
				this.handleB2bClasses()
			}
			this.handleGlobyClasses();
		}
	}

	private handleGlobyClasses() {
		// Create wrapper and insert input into it;
		this.wrapper = this._renderer2.createElement('div');
		this._renderer2.addClass(this._elementRef.nativeElement, this.inputClass);
		const parent = this._renderer2.parentNode(this._elementRef.nativeElement);
		this._renderer2.insertBefore(parent, this.wrapper, this._elementRef.nativeElement)
		this._renderer2.appendChild(this.wrapper, this._elementRef.nativeElement);
		this._renderer2.addClass(this.wrapper, 'ngx-input-wrapper')
		this._renderer2.addClass(this.wrapper, this.wrapperClass)

		// Creat label and insert it input wrapper;
		if (this.label && this.version === NgxInputVersionEnum.GLOBY) {
			const labelElement = this._renderer2.createElement("span");
			const labelText = this._renderer2.createText(this.label);
			this._renderer2.appendChild(labelElement, labelText);
			this._renderer2.addClass(labelElement, this.defLabelClass);
			this._renderer2.insertBefore(this.wrapper, labelElement, this._elementRef.nativeElement)
		}
	}

	private handleB2bClasses() {
		this._renderer2.addClass(this._elementRef.nativeElement, this.inputClass);
	}
}
