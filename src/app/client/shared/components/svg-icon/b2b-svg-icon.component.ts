import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { PlatformService } from '../../../services/platform/platform.service';
import { NgIf } from '@angular/common';

@Component({
	selector: 'b2b-svg-icon',
	standalone: true,
	imports: [SvgIconComponent, NgIf],
	templateUrl: './b2b-svg-icon.component.html',
	styleUrl: './svg-icon.component.scss',
})
export class B2bSvgIconComponent {
	@Input() src: string;
	constructor(public platformService: PlatformService) {}
}
