import {inject, Injectable} from '@angular/core';
import {ApiService} from "../../../core/services/api/api.service";
import _ from "lodash";
import {Observable, of} from "rxjs";
import {first} from "rxjs/operators";
import {AuthService} from "../../../auth/services/auth/auth.service";
import {Folder, FolderUpdate, GetFolderList} from 'src/app/core/models/folder.model';

@Injectable({
	providedIn: 'root'
})
export class FolderService {

	folders$ = new Observable<Folder[]>;
	folder$ = new Observable<Folder>;
	private readonly baseUrl = 'folder'
	private apiService = inject(ApiService);
	private authService = inject(AuthService);

	create(data: FolderUpdate) {
		const create = this.getFormData(data);
		return this.apiService.post<Folder>(this.baseUrl, create)
	}

	update(data: FolderUpdate) {
		const update = this.getFormData(data);
		return this.apiService.patch<Folder>(this.baseUrl, update);
	}

	delete(id: string) {
		return this.apiService.delete(this.baseUrl, {
			params: {
				id
			}
		})
	}

	list(data: GetFolderList) {
		this.folders$ = this.apiService.get<Folder[]>(this.baseUrl, {
			params: data
		});
		return this.folders$;
	}

	findById(id: string) {
		this.folder$ = this.apiService.get<Folder>(this.baseUrl + `/${id}`);
		return this.folder$;
	}

	getListByCompanyId(id?: string) {
		id = id ?? this.authService?.company?._id;
		if (!id) {
			return of(null)
		}
		return this.list({company: id}).pipe(first())
	}

	private getFormData(folder: FolderUpdate | Folder) {
		const formData = new FormData()
		const images = _.pick(folder, 'images')?.images?.filter(x => !x?._id);
		const videos = _.pick(folder, 'videos')?.videos?.filter(x => !x?._id);
		const uploadedImages = (_.pick(folder, 'uploadedImages') as FolderUpdate)?.uploadedImages as string[];
		const uploadedVideos = (_.pick(folder, 'uploadedVideos') as FolderUpdate)?.uploadedVideos as string[];
		// Omit images form main object because we will send them as binaries
		const data = _.omit(folder, ['images', 'videos', 'uploadedImages', 'uploadedVideos']);
		// Create array for binary files
		if (images?.length) {
			for (const image of images as unknown as File[]) {
				formData.append('images', image)
			}
		}
		if (videos?.length) {
			for (const video of videos as unknown as File[]) {
				formData.append('videos', video)
			}
		}

		if (uploadedImages?.length) {
			for (const image of uploadedImages) {
				formData.append('uploadedImages', image)
			}
		}
		if (uploadedVideos?.length) {
			for (const image of uploadedVideos) {
				formData.append('uploadedImages', image)
			}
		}
		// Append form data with data it needed;
		Object.entries(data).forEach(([key, value]: [string, any]) => {
			formData.append(key, value);
		})
		return formData;
	}
}

