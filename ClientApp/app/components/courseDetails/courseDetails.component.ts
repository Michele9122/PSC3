import { Component } from '@angular/core';
import { CourseServices } from '../../services/courseServices';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'course-detail',
    templateUrl: './courseDetails.component.html'
})
export class courseDetailComponent {
    private empId: number;
//    public SubjectList = [];
    public CourseDetails = {};
    public constructor(private empService: CourseServices, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.empId = params['id'];
        });

   /*     this.empService.getSubjectList()
            .subscribe(
            (data: Response) => (this.SubjectList = data.json())
            ); */

        this.empService.getCourseDetails(this.empId)
            .subscribe((data: Response) =>
                (this.CourseDetails["CorsoId"] = data.json().corsoId,
                    this.CourseDetails["Titolo"] = data.json().titolo,
                    this.CourseDetails["DurataAnni"] = data.json().durataAnni,
                    this.CourseDetails["MateriaId"] = data.json().materiaId,
                    this.CourseDetails["Nome"] = data.json().nome,
                    this.CourseDetails["Crediti"] = data.json().crediti,
                    this.CourseDetails["Semestre"] = data.json().semestre

                ));

    }

}   