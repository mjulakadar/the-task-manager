import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (!value) return value;
        if (typeof (value) === 'string') {
            return value.replace(/\w\S*/g, (text) => {
                return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
            })
        } else {
            return value;
        }
    }
}