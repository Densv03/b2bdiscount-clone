import { Injectable } from '@angular/core';
import { register } from 'swiper/swiper-element';
import { PlatformService } from '../../services/platform/platform.service';

@Injectable({
	providedIn: 'root',
})
export class SwiperService {
	constructor(private platformService: PlatformService) {
		this.init();
	}

	private init() {
		if (this.platformService.isServer) {
			return;
		}
		register();
	}
}
