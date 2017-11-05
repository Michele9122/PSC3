import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { CourseServices } from '../../services/courseServices';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'new-course',
    templateUrl: './newCourse.component.html'
})
export class newCourseComponent {
    public CourseList = [];
    public formData: FormGroup;
    public constructor(private empService: CourseServices) {

        this.formData = new FormGroup({
            'CorsoId': new FormControl('', [Validators.required]),
            'Titolo': new FormControl('', Validators.required),
            'DurataAnni': new FormControl('', Validators.required)
        });
    }
    /*
    customValidator(control: FormControl): { [s: string]: boolean } {
        if(control.value == "0") 
            return { data: true };
        else {
            return { data: false };
        }
        
    } */

    submitData() {
        if (this.formData.valid) {
            var Obj = {
                CorsoId: this.formData.value.CorsoId,
                Titolo: this.formData.value.Titolo,
                DurataAnni: this.formData.value.DurataAnni,
            };
            this.empService.postData(Obj).subscribe();
            alert("Corso Inserito con Successo");
        }

    }


}