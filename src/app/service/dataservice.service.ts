import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  users: any = [];

  constructor(private http: HttpClient) {}

  getUsers(pageSize: number, page: any) {
    return this.http.get(
      `http://localhost:8080/user?pageNo=${page}&pageSize=${pageSize}`
    );
  }

  storeUsers(data: any) {
    this.users = data;
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getSingleData(id: any) {
    return this.http.get(`http://localhost:8080/user/find/${id}`);
  }

  public deleteUser(id: any) {
    return this.http
      .delete(`http://localhost:8080/user/delete/${id}`)
      .subscribe((data: any) => {
        console.log('Deleted Successfully');
      });
  }

  public adduser(_body: any, _headers: any) {
    return this.http
      .post('http://localhost:8080/user/adduser', _body, _headers)
      .subscribe((data: any) => {});
  }

  public updateuser(data: any) {
    return this.http
      .put('http://localhost:8080/user/update', data)
      .subscribe((res: any) => {});
  }

  public getpage(pageSize: any, page: any) {
    return this.http.get(
      `http://localhost:8080/user/page?pageNo=${page}&pageSize=${pageSize}`
    );
  }
}
