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
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BlogService } from '../../../../../../src/app/client/services/blog/blog.service';
import { forkJoin, Observable } from 'rxjs';
import {
	debounceTime, distinctUntilChanged,
	filter,
	first,
	map, startWith,
	switchMap,
} from 'rxjs/operators';
import { B2bNgxInputThemeEnum } from 'projects/ngx-input/src/public-api';
import { environment } from '../../../../../../src/environments/environment';
import Editor from '../../../../../assets/ckeditor5-build/build/ckeditor.js';
import { getFormData } from "../../../../../../src/app/core/helpers/function/get-form-data";
import {
	CreatingPostMessages,
	Tag,
	UpdatingPostMessages,
	UploadingImagesMessages
} from "../types/admin-blog-post.type";
import { AdminBlogPostService } from "../service/admin-blog-post.service";


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


	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly activatedRoute: ActivatedRoute,
		private readonly blogService: BlogService,
		private readonly router: Router,
		private readonly adminBlogPostService: AdminBlogPostService,
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
		if (!this.formGroup.valid) {
			return;
		}

		const {_id, ...rest} = data
		this.adminBlogPostService.prepareBlogRequest(rest);
		return;

		// let {
		// 	_id,
		// 	level2Category,
		// 	title,
		// 	country,
		// 	description,
		// 	author,
		// 	image,
		// 	shortDescription,
		// 	typeArticle,
		// 	datePublication
		// } = data;
		//
		// const postAction: BLOG_ACTION = _id ? BLOG_ACTION.EDIT : BLOG_ACTION.CREATE;
		//
		// const body: any = {
		// 	title,
		// 	description,
		// 	author,
		// 	country,
		// 	category: level2Category,
		// 	shortDescription,
		// 	typeArticle,
		// 	datePublication
		// };
		//
		// body.description = description.replaceAll('<a', '<a rel="nofollow"');
		// body.description = description.replaceAll('<a', '<a target="_blank""');
		//
		// if (postAction === BLOG_ACTION.CREATE) {
		// 	this.blogService
		// 		.createBlog(body)
		// 		.pipe(
		// 			this.hotToastService.observe(CreatingPostMessages)
		// 		)
		// 		.subscribe((data: any) => {
		// 			this.blogService
		// 				.uploadImage(getFormData({image}), data._id)
		// 				.pipe(this.hotToastService.observe(UploadingImagesMessages))
		// 				.subscribe(() => this.router.navigate(['/blog']));
		// 		});
		// } else {
		// 	forkJoin([
		// 		this.blogService.updateBlog(_id, body).pipe(first()),
		// 		this.blogService
		// 			.uploadImage(getFormData({image}), _id)
		// 			.pipe(first()),
		// 	])
		// 		.pipe(this.hotToastService.observe(UpdatingPostMessages))
		// 		.subscribe(() => this.router.navigate(['/blog']));
		// }
	}

	public recommendationsFormArray(): FormArray {
		return this.formGroup.get('recommendations') as FormArray;
	}

	public addRecommendation(): void {
		if (this.recommendationsFormArray().length === 3) {
			return
		}
		this.recommendationsFormArray().push(this.getRecommendationFormControl());
	}

	public removeRecommendation(index: number): void {
		this.recommendationsFormArray().removeAt(index);
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
		});
	}

	private patchForm(): void {
		const currentArticle$ = this.activatedRoute.paramMap.pipe(
			map((paramMap) => paramMap.get('id')),
			filter((id) => !!id),
			switchMap((id) => this.blogService.getArticleById(id))
		);

		currentArticle$.pipe(
			untilDestroyed(this)
		).subscribe(article => {
			this.formGroup.patchValue({
				...article.blog,
				image: [environment.apiUrl + article.blog.image?.lg],
			})
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
}
