import {Component, EventEmitter, Output} from '@angular/core';
import {B2bNgxButtonModule} from "@b2b/ngx-button";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'b2b-client-profile-mobile-toolbar',
  standalone: true,
	imports: [
		B2bNgxButtonModule,
		MatButton
	],
  templateUrl: './client-profile-mobile-toolbar.component.html',
  styleUrl: './client-profile-mobile-toolbar.component.scss'
})
export class ClientProfileMobileToolbarComponent {
	@Output() initSave = new EventEmitter<boolean>();

	onInitSave() {
		this.initSave.emit(true);
	}
}
