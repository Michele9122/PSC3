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
                (this.SubjectDetails["Nome"] = data.json().nome,
                    this.SubjectDetails["Cognome"] = data.json().cognome,
                    this.SubjectDetails["DataNascita"] = data.json().dataNascita,
                    this.SubjectDetails["CodiceFiscale"] = data.json().codiceFiscale,
                    this.SubjectDetails["Sesso"] = data.json().sesso,
                    this.SubjectDetails["AnnoIscrizione"] = data.json().annoIscrizione,
                    this.SubjectDetails["Matricola"] = data.json().matricola,
                    this.SubjectDetails["Titolo"] = data.json().titolo

                ));

    }

}   