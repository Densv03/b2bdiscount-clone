import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { FormControl, FormGroup } from '@angular/forms';
import {B2bNgxInputThemeEnum} from "@b2b/ngx-input";
import {MixpanelService} from "./core/services/mixpanel/mixpanel.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public theme = B2bNgxInputThemeEnum

  public form: FormGroup = new FormGroup({ categories: new FormControl('') });

  constructor(private readonly mixpanelService: MixpanelService) {
  }

  ngOnInit(): void {
    this.form
      .get('categories')
      ?.setValue([
        '60a784830a04b16c574e823e',
        '60a784830a04b16c574e8246',
        '60a784830a04b16c574e826d',
        '60a784830a04b16c574e8267',
        '60a784830a04b16c574e825e',
        '60a784830a04b16c574e8249',
        '61ee4bfca0e63583b45822b5',
        '624d710bd5a00e47604996e4',
        '624d7131d5a00e4760499705',
      ]);
    this.form
      .get('categories')
      ?.valueChanges.subscribe((data) => console.log('value changes', data));

		if (!document.cookie.includes("firstVisit=true")) {
			this.mixpanelService.track('User joined');
			let expirationDate = new Date();
			expirationDate.setFullYear(expirationDate.getFullYear() + 1);
			document.cookie = "firstVisit=true; expires=" + expirationDate.toUTCString();
		}
  }
}
