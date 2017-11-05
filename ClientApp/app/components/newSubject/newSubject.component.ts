import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { SubjectServices } from '../../services/subjectServices';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'new-subject',
    templateUrl: './newSubject.component.html'
})
export class newSubjectComponent {
    public TeacherList = [];
    public formData: FormGroup;
    public constructor(private empService: SubjectServices) {
        this.empService.getTeacherList()
            .subscribe(
            (data: Response) => (this.TeacherList = data.json())
            );

        this.formData = new FormGroup({
            'MateriaId': new FormControl('', [Validators.required]),
            'Denominazione': new FormControl('', Validators.required),
            'Crediti': new FormControl('', Validators.required),
            'Insegnate': new FormControl(0, Validators.required)
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
                MateriaId: this.formData.value.Nome,
                Denominazione: this.formData.value.Cognome,
                Crediti: this.formData.value.DataNascita,
                InsegnateId: this.formData.value.Teacher,
            };
            this.empService.postData(Obj).subscribe();
            alert("Materia Inserito con Successo");
        }

    }


}