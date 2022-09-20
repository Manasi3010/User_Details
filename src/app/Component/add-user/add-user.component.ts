import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm: any;
  data: any;
  constructor(
    private fb: FormBuilder,
    private dataservice: DataserviceService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [],
      lastName: [],
      age: [],
      email: [],
      macAddress: [],
      gender: [],
      bday: [],
      domain: [],
      imageurl: [],
      ip: [],
      password: [],
      username: [],
      university: [],
      uDetail: this.fb.group({
        address: [],
        city: [],
        state: [],
      }),
      uBank: this.fb.group({
        cardExpire: [],
        cardNumber: [],
        cardType: [],
        currency: [],
        iban: [],
      }),
      uCompany: this.fb.group({
        address: [],
        city: [],
        department: [],
        lat: [],
        lng: [],
        name: [],
        postalcode: [],
        state: [],
        title: [],
      }),
    });
  }

  savedata() {
    const headers = { 'content-type': 'application/json' };
    this.data = this.userForm.value;
    this.dataservice.adduser(this.data, headers);
  }
}
