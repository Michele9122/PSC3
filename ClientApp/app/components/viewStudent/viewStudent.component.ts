import { Component } from '@angular/core';
import { StudentServices } from '../../services/studentServices';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'view-student',
    templateUrl: './viewStudent.component.html'
})
export class viewStudentComponent {
    public StudentList = [];
    public constructor(private empService: StudentServices) {
        this.empService.getStudentsList()
            .subscribe(
            (data: Response) => (this.StudentList = data.json())
            );

    }

    deleteStudent(empId: number) {


        var status = confirm("Sei sicuro di voler cancellare questo studente?");
        if (status == true) {
            this.empService.removeStudentDetails(empId)
                .subscribe((data: Response) => (alert("Studente cancellato con successo")));

            //aggiorna la lista studenti
            this.empService.getStudentsList()
                .subscribe(
                (data: Response) => (this.StudentList = data.json())
                );
        }

    }
}

