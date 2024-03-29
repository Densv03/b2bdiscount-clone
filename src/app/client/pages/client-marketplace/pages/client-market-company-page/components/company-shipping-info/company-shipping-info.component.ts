import {AfterViewInit, Component, Input} from '@angular/core';
import {AmChart, AmChartsService} from '@amcharts/amcharts3-angular';
import {getName} from 'country-list';
import {CommonModule} from '@angular/common';
import {B2bNgxIconModule} from '@b2b/ngx-icon';
import {PublicCompanyInfoModel} from "../../../../../../../core/models/public-company-info.model";
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

declare const am5geodata_worldLow: any;

@Component({
	selector: 'b2b-company-shipping-info',
	standalone: true,
	imports: [CommonModule, B2bNgxIconModule],
	templateUrl: './company-shipping-info.component.html',
	styleUrl: './company-shipping-info.component.scss',
})
export class CompanyShippingInfoComponent implements AfterViewInit {
	@Input({required: true}) companyInfo: PublicCompanyInfoModel;

	private chart: AmChart | undefined;

	constructor(private AmCharts: AmChartsService) {
	}

	ngAfterViewInit() {
		if (this.companyInfo.paymentAndShipping.countries.length) {
			this.initializeMap();
		}
	}

	public atLeastOnePaymentInfoIsPresented(): boolean {
		if (!this.companyInfo.paymentAndShipping) return false;
		return Object.values(this.companyInfo.paymentAndShipping).some(item => item.length > 0);
	}

	checkElementIsNotLastInArr(index: any, arrLength: any): boolean {
		return index < arrLength;
	}

	public getCountryNameByCode(code: string): string {
		return getName(code.toUpperCase());
	}

	private initializeMap(): void {
		const root = am5.Root.new("chartdiv");

		root.setThemes([
			am5themes_Animated.new(root)
		]);

		const chart = root.container.children.push(
			am5map.MapChart.new(root, {
				panX: "none",
				panY: "none",
				projection: am5map.geoNaturalEarth1()
			})
		);

		const polygonSeries = chart.series.push(
			am5map.MapPolygonSeries.new(root, {
				geoJSON: am5geodata_worldLow,
				exclude: ["AQ"],
				fill: am5.color('#fff'),
				stroke: am5.color('#000'),
			})
		);

		polygonSeries.mapPolygons.template.setAll({
			tooltipText: "{name}",
			templateField: "polygonSettings",
		});

		polygonSeries.mapPolygons.template.states.create("hover", {
			fill: am5.color('#407BFF')
		});
		let countriesArr: any = this.companyInfo.paymentAndShipping.countries;
		countriesArr = countriesArr.map((country: any) => ({
			id: country.toUpperCase(),
			polygonSettings: {
				fill: am5.color('#407BFF')
			}
		}))
		polygonSeries.data.setAll(countriesArr)
	}
}
