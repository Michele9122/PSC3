import { Component } from '@angular/core';
import { SubjectServices } from '../../services/subjectServices';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'view-subject',
    templateUrl: './viewSubject.component.html'
})
export class viewSubjectComponent {
    public SubjectList = [];
    public constructor(private empService: SubjectServices) {
        this.empService.getSubjectList()
            .subscribe(
            (data: Response) => (this.SubjectList = data.json())
            );

    }

    deleteSubject(empId: number) {


        var status = confirm("Sei sicuro di voler cancellare questa materia?");
        if (status == true) {
            this.empService.removeSubjectDetails(empId)
                .subscribe((data: Response) => (alert("Materia cancellata con successo")));

            //aggiorna la lista materie
            this.empService.getSubjectList()
                .subscribe(
                (data: Response) => (this.SubjectList = data.json())
                );
        }

    }
}

