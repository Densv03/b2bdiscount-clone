import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobyFileService {
	deleteItem$: Subject<number> = new Subject<number>();

	delete(index: number) {
		this.deleteItem$.next(index);
	}
}
