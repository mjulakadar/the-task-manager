import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'impureFilter',
    pure: false
})
export class ImpureFilterPipe implements PipeTransform {
    transform(items: any[], filter: (item: any) => boolean) {
        if (!items) return items;
        return items.filter(filter);
    }
}