import { Pipe, PipeTransform } from '@angular/core';

export interface ICustomeDate {
    day: string;
    month: string;
    year: number
}

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

    transform(value: Date | string): ICustomeDate {
        const date = new Date(value);
        const day = this.getDaySuffix(date.getDate());
        const month = date.toLocaleString('default', { month: 'long' });
        const weekday = date.toLocaleString('default', { weekday: 'long' });
        const year = date.getFullYear();

        return ({
            day: `${weekday} ${date.getDate()}${day}`,
            month: month,
            year: year
        });
    }

    getDaySuffix(day: number): string {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }
}
