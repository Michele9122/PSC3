import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "RxJS/Rx";

@Injectable()
export class StudentServices {
    constructor(private http: Http) {

    }
    getStudentsList() {
        return this.http.get('http://localhost:5000/api/student');
    }

    getStudentDetails(empId: any) {

        return this.http.get('http://localhost:5000/api/student/' + empId);
    }

    getCourseList() {
        return this.http.get('http://localhost:5000/api/course');
    }

    postData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:5000/api/student', JSON.stringify(empObj), options);
    }



    removeStudentDetails(empId: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        return this.http.delete('http://localhost:5000/api/student', new RequestOptions({
            headers: headers,
            body: empId
        }));


    }

    editStudentData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('http://localhost:5000/api/student', JSON.stringify(empObj), options);
    }

}

