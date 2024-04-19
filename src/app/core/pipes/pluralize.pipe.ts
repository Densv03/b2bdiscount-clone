import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
  standalone: true
})
export class PluralizePipe implements PipeTransform {
	transform(value: string, count: number): string {
		if (count > 1) {
			return value + 's';
		} else {
			return value;
		}
	}
}
