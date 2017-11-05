import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "RxJS/Rx";

@Injectable()
export class CourseServices {
    constructor(private http: Http) {

    }
  
    getCourseDetails(empId: any) {

        return this.http.get('http://localhost:5000/api/course' + empId);
    }

    getCourseList() {
        return this.http.get('http://localhost:5000/api/course');
    }
    /*
    getSubjectList() {
        return this.http.get('http://localhost:5000/api/course/subject');
    } */

    postData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:5000/api/course', JSON.stringify(empObj), options);
    }



    removeCourseDetails(empId: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        return this.http.delete('http://localhost:5000/api/course', new RequestOptions({
            headers: headers,
            body: empId
        }));


    }

    editCourseData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('http://localhost:5000/api/course', JSON.stringify(empObj), options);
    }

}

