import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  users: any = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
      return of(this.users);
    } else {
      return this.http.get('../../assets/Dummy_users.json');
    }
  }

  storeUsers(data: any) {
    this.users = data;
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getSingleData(id: any) {
    return this.users.filter((h: any) => h.id === +id)[0];
  }

  public updateUser(id: any, user: any) {
    let index = this.users.findIndex((h: any) => h.id === +id);
    this.users[index].firstName = user.personal.firstName;
    this.storeUsers(this.users);
  }
}
