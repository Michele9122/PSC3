import { Component } from '@angular/core';
import { StudentServices } from '../../services/studentServices';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'student-detail',
    templateUrl: './studentDetails.component.html'
})
export class studentDetailComponent {
    private empId: number;
    public StudentDetails = {};
    public constructor(private empService: StudentServices, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.empId = params['id'];
        });

        this.empService.getStudentDetails(this.empId)
            .subscribe((data: Response) =>
                (this.StudentDetails["Nome"] = data.json().nome,
                    this.StudentDetails["Cognome"] = data.json().cognome,
                    this.StudentDetails["DataNascita"] = data.json().dataNascita,
                    this.StudentDetails["CodiceFiscale"] = data.json().codiceFiscale,
                    this.StudentDetails["Sesso"] = data.json().sesso,
                    this.StudentDetails["AnnoIscrizione"] = data.json().annoIscrizione,
                    this.StudentDetails["Matricola"] = data.json().matricola,
                    this.StudentDetails["Titolo"] = data.json().titolo
     
            ));

    }

}   