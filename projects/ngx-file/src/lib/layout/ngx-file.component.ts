import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
	ViewChild
} from "@angular/core";
import {B2bNgxButtonThemeEnum} from "@b2b/ngx-button";
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from "@angular/forms";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {idGenerator} from "@b2b/id-generator";
import {MatDialog} from "@angular/material/dialog";
import {
	FileSizeErrorDialogComponent
} from "../../../../../src/app/client/shared/components/file-size-error-dialog/file-size-error-dialog.component";


import {ImageExtensions} from '../../../../../src/app/core/add-offer/image-extensions';
import {DocumentExtensions} from '../../../../../src/app/core/add-offer/document-extensions';

import {
	ClientOfferDocumentComponent
} from "../../../../../src/app/client/pages/client-offer/components/client-offer-document/client-offer-document.component";
import {DocumentModel} from "../../../../../src/app/core/models/document.model";
import {NgxInputVersionEnum} from "projects/ngx-input/src/lib/enum/ngx-input-version.enum";

@UntilDestroy()
@Component({
	selector: "b2b-ngx-file",
	templateUrl: "./ngx-file.component.html",
	styleUrls: ["./ngx-file.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => B2bNgxFileComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => B2bNgxFileComponent),
			multi: true,
		},
	],
})
export class B2bNgxFileComponent implements ControlValueAccessor, OnInit, OnChanges {
	@ViewChild('fileInput') fileInput: ElementRef;
	@Input() public type: string;
	@Input() public placeholder: string;
	@Input() public theme: B2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum.OUTLINE_BLACK
	@Input() public className: string;
	@Input() public isClickable: boolean;
	@Input() public maxAllowedSize: number = 50; //50mb
	@Input() public showIcon: boolean = true;
	@Input() public isPhoto: boolean;
	@Input() public icon: string;
	@Input() errors: ValidationErrors;
	@Input() public label: string;
	@Input() public version = NgxInputVersionEnum.B2B;
	@Input() public emptyFileLabel: string = 'No File Chosen'
	@Input() public acceptSingle = false;
	@Input() public showFilesList = true;

	@Output() clicked = new EventEmitter<any>();
	@Output() removeProduct: EventEmitter<string> = new EventEmitter<string>();

	public readonly formControl: FormControl<string>;
	public readonly id: string;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public files: any[];
	protected readonly NgxInputVersionEnum = NgxInputVersionEnum;
	private onChange: (value: File[]) => void;
	private onTouched: () => void;
	private readonly maxAllowedSizeBytes: number;

	constructor(
		private readonly _cdR: ChangeDetectorRef,
		private readonly dialog: MatDialog) {
		this.type = "input";
		this.files = [];
		this.placeholder = "";

		this.onChange = () => null;
		this.onTouched = () => null;

		this.formControl = new FormControl<string>('');
		this.id = idGenerator();

		this.maxAllowedSizeBytes = this.maxAllowedSize * Math.pow(10,
			6);
	}

	get iconName() {
		if (this.icon) {
			return this.icon;
		}
		return this.isPhoto ? 'photo' : 'attach'
	}

	get classNamePrefix() {
		return this.isB2BVersion ? '' : 'globy-'
	}

	get isB2BVersion() {
		return this.version === NgxInputVersionEnum.B2B;
	}

	public get inputClassName(): string {
		return `${this.className}`;
	}

	public get error(): string {
		if (!this.errors) {
			return "";
		}

		const firstErrorKey = Object.keys(this.errors)[0];

		return this.errors[firstErrorKey] as string;
	}

	public uploadFiles(event: Event): void {
		if (this.findTotalSize(Array.from((event.target as HTMLInputElement).files)) <= this.maxAllowedSizeBytes) {
			if (this.acceptSingle) {
				this.files = [...Array.from((event.target as HTMLInputElement).files)];
				this.onChange(this.files);
			} else {
				this.files = [...this.files, ...Array.from((event.target as HTMLInputElement).files)];
				this.onChange(this.files);
			}
			// this.files.length ? this.label = '' : null;
		} else {
			this.fileInput.nativeElement.value = "";
			this.dialog
				.open(FileSizeErrorDialogComponent,
					{
						data: {
							maxAllowedSize: this.maxAllowedSize,
							isSingleFile: false,
						},
					})
		}
	}

	public handleClick(file: File | DocumentModel): void {
		this.clicked.emit(file)
	}

	public openUploadedDocument(file: File): void {
		const extension = file.name.split('.').pop().toLowerCase();
		let fullPath: any = '';

		const fileReader = new FileReader();
		fileReader.onload = () => {
			fullPath = fileReader.result;
			const data = {
				fullPath,
				extension,
				isImage: ImageExtensions.includes(extension),
				isDocument: DocumentExtensions.includes(extension),
			};

			this.dialog.open(ClientOfferDocumentComponent,
				{
					data,
					width: "80vw",
					height: "80vh",
				});
		}

		fileReader.readAsDataURL(file);
	}

	ngOnInit(): void {
		this.subscribeOnValueChanges();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["errors"]) {
			this.formControl.setErrors(changes["errors"].currentValue);
		}
	}

	public validate(): ValidationErrors {
		return this.formControl.errors;
	}

	public registerOnChange(fn: (value: File[]) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public writeValue(values: any[]): void {
		if (values) {
			this.files = values;
			// values
			// 	.filter((val) => val?._id)
			// 	.forEach((val) => {
			// 		this.files.push({ name: val._id });
			// 	});
			this._cdR.detectChanges();

			this.formControl.setValue("",
				{emitEvent: false});
		}
	}

	public setDisabledState(isDisabled: boolean): void {
		if (isDisabled) {
			this.formControl.disable();
		} else {
			this.formControl.enable();
		}
	}

	public removeFile(fileName: string): void {
		const filteredFiles = this.files.filter((item: any) => !(item.name === fileName || item._id === fileName));
		if (filteredFiles.length !== this.files.length) {
			this.removeProduct.emit(fileName);
		}
		this.files = filteredFiles;
		this.onChange(this.files);
	}

	private findTotalSize(files: File[]): number {
		return files.reduce((
				accum,
				curr) => accum += curr.size,
			0)
	}

	private subscribeOnValueChanges(): void {
		this.formControl.valueChanges.pipe(untilDestroyed(this)).subscribe((value: any) => {
			this.onChange(value);
		});
	}
}
