import { Component } from '@angular/core';
import { CourseServices } from '../../services/courseServices';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'view-course',
    templateUrl: './viewCourse.component.html'
})
export class viewCourseComponent {
    public CourseList = [];
    public constructor(private empService: CourseServices) {
        this.empService.getCourseList()
            .subscribe(
            (data: Response) => (this.CourseList = data.json())
            );

    }

    deleteCourse(empId: number) {


        var status = confirm("Sei sicuro di voler cancellare questo corso?");
        if (status == true) {
            this.empService.removeCourseDetails(empId)
                .subscribe((data: Response) => (alert("Corso cancellato con successo")));

            //aggiorna la lista corsi
            this.empService.getCourseList()
                .subscribe(
                (data: Response) => (this.CourseList = data.json())
                );
        }

    }
}

