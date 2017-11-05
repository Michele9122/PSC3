import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchCourse'
})

export class searchCourse implements PipeTransform {
    transform(value: any, args: string): any {
        if (args == null || args == undefined) {
            return value;
        }
        else {
            let filter = args.toLocaleLowerCase();
            return filter ? value.filter(course => (course.corsoId.toLocaleLowerCase().indexOf(filter) != -1)
                || (course.titolo.toLocaleLowerCase().indexOf(filter) != -1)
            ) : value;
        }
    }
}  