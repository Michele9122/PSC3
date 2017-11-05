import { Component } from '@angular/core';
import { CourseServices } from '../../services/courseServices';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'edit-student',
    templateUrl: './editCourse.component.html'
})
export class editCourseComponent {
    private EmpId: number;
    public CourseDetails = {};
    public nome: string;
    public formData: FormGroup;

    public constructor(private empService: CourseServices, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.EmpId = params['id'];
        });

        this.formData = new FormGroup({
            'CorsoId': new FormControl('', [Validators.required]),
            'Titolo': new FormControl('', Validators.required),
            'DurataAnni': new FormControl('', Validators.required),
        });
        this.empService.getCourseDetails(this.EmpId)
            .subscribe((data: Response) => (
                this.formData.patchValue({ CorsoId: data.json().corsoId }),
                this.formData.patchValue({ Titolo: data.json().titolo }),
                this.formData.patchValue({ DurataAnni: data.json().durataAnni })
            ));


    }
    /*
    customValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value == "0") {
            return { data: true };
        }
        else {
            return null;
        }
    }
    */
    submitData() {
        if (this.formData.valid) {
            var Obj = {
                CorsoId: this.formData.value.CorsoId,
                Titolo: this.formData.value.Titolo,
                DurataAnni: this.formData.value.DurataAnni,
            };
            this.empService.editCourseData(Obj)
                .subscribe((data: Response) => (alert("Corso aggiornato con successo")));;

        }

    }
}  