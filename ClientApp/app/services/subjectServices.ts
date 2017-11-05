import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "RxJS/Rx";

@Injectable()
export class SubjectServices {
    constructor(private http: Http) {

    }
    getSubjectList() {
        return this.http.get('http://localhost:5000/api/subject');
    }

    getSubjectDetails(empId: any) {

        return this.http.get('http://localhost:5000/api/subject/' + empId);
    }

    removeSubjectDetails(empId: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        return this.http.delete('http://localhost:5000/api/subject', new RequestOptions({
            headers: headers,
            body: empId
        }));


    }



}

