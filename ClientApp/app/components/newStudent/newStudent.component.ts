import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { StudentServices } from '../../services/studentServices';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'new-student',
    templateUrl: './newStudent.component.html'
})
export class newStudentComponent {
    public CourseList = [];
    public formData: FormGroup;
    public constructor(private empService: StudentServices) {
        this.empService.getCourseList()
            .subscribe(
            (data: Response) => (this.CourseList = data.json())
            );

        this.formData = new FormGroup({
            'Nome': new FormControl('', [Validators.required]),
            'Cognome': new FormControl('', Validators.required),
            'DataNascita': new FormControl('', Validators.required),
            'CodiceFiscale': new FormControl('', Validators.required),
            'Sesso': new FormControl('', Validators.required),
            'AnnoIscrizione': new FormControl('', Validators.required),
            'Matricola': new FormControl('', Validators.required),
            'Corso': new FormControl(0, Validators.required)
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
                Nome: this.formData.value.Nome,
                Cognome: this.formData.value.Cognome,
                DataNascita: this.formData.value.DataNascita,
                CodiceFiscale: this.formData.value.CodiceFiscale,
                Sesso: this.formData.value.Sesso,
                AnnoIscrizione: this.formData.value.AnnoIscrizione,
                Matricola: this.formData.value.Matricola,
                CorsoId: this.formData.value.Corso,
            };
            this.empService.postData(Obj).subscribe();
            alert("Studente Inserito con Successo");
        }

    }


}