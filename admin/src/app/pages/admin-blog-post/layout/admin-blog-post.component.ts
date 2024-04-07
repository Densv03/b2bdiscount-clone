import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { B2bNgxButtonThemeEnum } from 'projects/ngx-button/src/public-api';
import { B2bNgxSelectThemeEnum } from 'projects/ngx-select/src/public-api';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BlogService } from '../../../../../../src/app/client/services/blog/blog.service';
import { Observable } from 'rxjs';
import {
	debounceTime, distinctUntilChanged,
	filter,
	map,
	startWith,
	switchMap,
} from 'rxjs/operators';
import { B2bNgxInputThemeEnum } from 'projects/ngx-input/src/public-api';
import { environment } from '../../../../../../src/environments/environment';
import Editor from '../../../../../assets/ckeditor5-build/build/ckeditor.js';
import {
	CreatingAuthorMessages,
	CreatingPostMessages,
	DeletingAuthorMessages,
	UpdatingAuthorMessages,
	UpdatingPostMessages,
	Tag,
} from "../types/admin-blog-post.type";
import { AdminBlogPostService } from "../service/admin-blog-post.service";
import { MatDialog } from "@angular/material/dialog";
import { AddAuthorDialogComponent } from "../add-author-dialog/add-author-dialog.component";
import { HotToastService } from "@ngneat/hot-toast";


enum BLOG_ACTION {
	CREATE,
	EDIT,
}

@UntilDestroy()
@Component({
	selector: 'b2b-admin-blog-post',
	templateUrl: './admin-blog-post.component.html',
	styleUrls: ['./admin-blog-post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminBlogPostComponent implements OnInit {
	public readonly b2bNgxSelectThemeEnum: typeof B2bNgxSelectThemeEnum;
	public readonly b2bNgxButtonThemeEnum: typeof B2bNgxButtonThemeEnum;
	public readonly b2bNgxInputThemeEnum = B2bNgxInputThemeEnum;
	public Editor = Editor;

	public blogAction: BLOG_ACTION = this.activatedRoute.snapshot.params['id'] === 'create' ? BLOG_ACTION.CREATE : BLOG_ACTION.EDIT;
	public formGroup: FormGroup = this.getFormGroup();
	public blogActionEnum = BLOG_ACTION;

	public searchControl = new FormControl('');
	public searchedOptions$: Observable<Tag[]> = this.getSearchedOptions$();

	public articleTypes$ = this.adminBlogPostService.articleTypes$();
	public blogAuthors$ = this.blogService.getAuthorList$().pipe(map(data => data.data));

	public isEditAuthorButtonVisible$ = this.formGroup.valueChanges.pipe(map(data => !!data.authorId))
	public currentArticle$ = this.activatedRoute.paramMap.pipe(
		map((paramMap) => paramMap.get('id')),
		filter((id) => !!id),
		switchMap((id) => this.blogService.getNewArticleById(id))
	);

	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly activatedRoute: ActivatedRoute,
		private readonly blogService: BlogService,
		private readonly router: Router,
		private readonly adminBlogPostService: AdminBlogPostService,
		private readonly dialog: MatDialog,
		private readonly hotToastService: HotToastService,
	) {
		this.b2bNgxSelectThemeEnum = B2bNgxSelectThemeEnum;
		this.b2bNgxButtonThemeEnum = B2bNgxButtonThemeEnum;
	}

	ngOnInit() {
		if (this.blogAction === BLOG_ACTION.EDIT) {
			this.patchForm();
		}

	}

	public setSearch(search: any): void {
		this.searchControl.setValue(search);
	}


	public onSubmit(data: any): void {
		this.formGroup.markAllAsTouched();
		if (this.formGroup.invalid) {
			this.hotToastService.error('Form is invalid. Please check errors above');
			return;
		}

		const {_id, ...rest} = data;
		if (this.blogAction === BLOG_ACTION.CREATE) {
			this.blogService.createNewBlog(this.adminBlogPostService.prepareBlogRequest(rest)).pipe(
				this.hotToastService.observe(CreatingPostMessages)
			).subscribe(() => {
				this.router.navigate(['/blog']);
			});
		} else {
			this.currentArticle$.pipe(switchMap(article => this.blogService.updateNewArticle(_id, this.adminBlogPostService.prepareBlogRequest(rest, article.data)).pipe(
				this.hotToastService.observe(UpdatingPostMessages)
			)))
				.subscribe(() => {
					this.router.navigate(['/blog']);
				});
		}
	}

	public recommendationsFormArray(): FormArray {
		return this.formGroup.get('recommendations') as FormArray;
	}

	public addRecommendation(): void {
		if (this.recommendationsFormArray().length === 3) {
			return;
		}
		this.recommendationsFormArray().push(this.getRecommendationFormControl());
	}

	public removeRecommendation(index: number): void {
		this.recommendationsFormArray().removeAt(index);
	}

	public addAuthorDialog(): void {
		this.dialog.open(AddAuthorDialogComponent, {
			width: '600px',
		})
			.afterClosed()
			.pipe(
				filter(({data}) => !!data),
				filter(({action}) => action === 'create'),
				switchMap(({data}) => this.blogService.createAuthor(data)),
				untilDestroyed(this)
			)
			.subscribe(() => {
				this.hotToastService.success(CreatingAuthorMessages.success);
				this.updateAuthorList();
			});
	}

	public editAuthorDialog(): void {
		this.blogAuthors$.pipe(
			map(data => data.find(author => author._id === this.formGroup.value.authorId)),
		).subscribe(author => {
			this.dialog.open(AddAuthorDialogComponent, {
				width: '600px',
				data: author,
			})
				.afterClosed()
				.pipe(
					filter(({data}) => !!data),
					filter(({action}) => action === 'update' || action === 'delete'),
				)
				.subscribe(({data, action}) => {
					if (action === 'delete') {
						this.blogService.deleteAuthor(data).subscribe(() => {
							this.hotToastService.success(DeletingAuthorMessages.success);
							this.updateAuthorList();
							this.formGroup.get('authorId')?.setValue(null);
						})
					} else if (action === 'update') {
						const {_id, ...rest} = data
						this.blogService.updateAuthor(rest, _id).subscribe(() => {
							this.hotToastService.success(UpdatingAuthorMessages.success);
							this.updateAuthorList();
						});
					}
				})
		})
	}

	private updateAuthorList(): void {
		this.blogAuthors$ = this.blogService.getAuthorList$().pipe(map(data => data.data));
	}

	private getRecommendationFormControl(): FormControl {
		return new FormControl('');
	}

	private getFormGroup() {
		return this.formBuilder.group({
			_id: null,
			title: ['', Validators.required],
			description: ['', Validators.required],
			images: ['', Validators.required],
			tags: [[]],
			shortDescription: ['', Validators.maxLength(500)],
			typeArticle: [null, Validators.required],
			datePublication: [null],
			timePublication: [null],
			authorId: [null],
			recommendations: this.formBuilder.array([this.getRecommendationFormControl()]),
			isDraft: [false],
		});
	}

	private patchForm(): void {
		this.currentArticle$.pipe(
			untilDestroyed(this)
		).subscribe(article => {
			for (let i = 0; i < article.data.recommendations.length - 1; i++) {
				this.addRecommendation();
			}

			this.formGroup.patchValue({
				...article.data,
				image: [environment.apiUrl + article.data.images[0]?.lg],
				authorId: article.data.authorId?._id,
				timePublication: this.getHoursAndMinutes(new Date(article?.data?.datePublication)),
				isDraft: article.data?.articleStatus === 'draft',
			});
		})
	}

	private getSearchedOptions$(): Observable<Tag[]> {
		return this.searchControl.valueChanges.pipe(
			debounceTime(1000),
			distinctUntilChanged(),
			startWith(''),
			switchMap((search) => this.blogService.getTags(search)),
		);
	}

	private getHoursAndMinutes(time: Date): string {
		const hours = time.getHours().toString().padStart(2, '0');
		const minutes = time.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	}
}
