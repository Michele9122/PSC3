import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchStudent'
})

export class searchStudent implements PipeTransform {
    transform(value: any, args: string): any {
        if (args == null || args == undefined) {
            return value;
        }
        else {
            let filter = args.toLocaleLowerCase();
            return filter ? value.filter(student => (student.nome.toLocaleLowerCase().indexOf(filter) != -1)
                || (student.cognome.toLocaleLowerCase().indexOf(filter) != -1)
                || (student.matricola.toLocaleLowerCase().indexOf(filter) != -1)
            ) : value;
        }
    }
}  