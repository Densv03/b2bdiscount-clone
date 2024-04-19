import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserLocation} from "../models/user-location.model";
import {map} from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})

export class LocationService {
	private httpClient = inject(HttpClient);

	getCountryCodeFromIp(): Observable<string> {
		return this.httpClient.get<UserLocation>('https://api.ipbase.com/v1/json/')
			.pipe(map(data => data.country_code.toLowerCase()));
	}
}
