import { Component } from '@angular/core';
import { StudentServices } from '../../services/studentServices';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'edit-student',
    templateUrl: './editStudent.component.html'
})
export class editStudentComponent {
    private EmpId: number;
    public StudentDetails = {};
    public nome: string;
    public CourseList = [];
    public formData: FormGroup;

    public constructor(private empService: StudentServices, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.EmpId = params['id'];
        });

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
        this.empService.getStudentDetails(this.EmpId)
            .subscribe((data: Response) => (
                this.formData.patchValue({ StudenteId: data.json().studenteId }),
                this.formData.patchValue({ Nome: data.json().nome }),
                this.formData.patchValue({ Cognome: data.json().cognome }),
                this.formData.patchValue({ DataNascita: data.json().dataNascita }),
                this.formData.patchValue({ CodiceFiscale: data.json().codiceFiscale }),
                this.formData.patchValue({ Sesso: data.json().sesso }),
                this.formData.patchValue({ AnnoIscrizione: data.json().annoIscrizione }),
                this.formData.patchValue({ Matricola: data.json().matricola }),
                this.formData.patchValue({ corsoId: data.json().corsoId })

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
                StudenteId: this.formData.value.StudenteId,
                Nome: this.formData.value.Nome,
                Cognome: this.formData.value.Cognome,
                DataNascita: this.formData.value.dataNascita,
                CodiceFiscale: this.formData.value.codiceFiscale,
                Sesso: this.formData.value.Sesso,
                Matricola: this.formData.value.Matricola,
                AnnoIscrizione: this.formData.value.annoIscrizione,
                CorsoId: this.formData.value.Corso,
            };
            this.empService.editStudentData(Obj)
                .subscribe((data: Response) => (alert("Studente aggiornato con successo")));;

        }

    }
}  