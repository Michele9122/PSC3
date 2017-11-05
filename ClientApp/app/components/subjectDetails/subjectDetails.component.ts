import { Component } from '@angular/core';
import { SubjectServices } from '../../services/subjectServices';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'subject-detail',
    templateUrl: './subjectDetails.component.html'
})
export class subjectDetailComponent {
    private empId: number;
    public SubjectDetails = {};
    public constructor(private empService: SubjectServices, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.empId = params['id'];
        });

        this.empService.getSubjectDetails(this.empId)
            .subscribe((data: Response) =>
                (this.SubjectDetails["MateriaId"] = data.json().materiaId,
                    this.SubjectDetails["Denominazione"] = data.json().denominazione,
                    this.SubjectDetails["Crediti"] = data.json().crediti,
                    this.SubjectDetails["Semestre"] = data.json().semestre,
                    this.SubjectDetails["Anno"] = data.json().anno,
                    this.SubjectDetails["Nome"] = data.json().nome,
                    this.SubjectDetails["Cognome"] = data.json().cognome

                ));

    }

}   