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

    getTeacherList() {
        return this.http.get('http://localhost:5000/api/teacher/');
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

    postData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:5000/api/subject', JSON.stringify(empObj), options);
    }


}

