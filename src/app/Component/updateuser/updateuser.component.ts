import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Form, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
})
export class UpdateuserComponent implements OnInit {
  id: any;
  selecteduser: any;
  userForm: any;
  constructor(
    private route: ActivatedRoute,
    private dataservice: DataserviceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.userForm = this.fb.group({
      id: [],
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
    this.dataservice.getSingleData(this.id).subscribe((data) => {
      this.selecteduser = data;

      this.setData();
    });
  }
  setData() {
    this.userForm.setValue({
      id: this.selecteduser.id,
      firstName: this.selecteduser.firstName,
      lastName: this.selecteduser.lastName,
      age: this.selecteduser.age,
      email: this.selecteduser.email,
      macAddress: this.selecteduser.macAddress,
      gender: this.selecteduser.gender,
      bday: this.selecteduser.bday,
      domain: this.selecteduser.domain,
      imageurl: this.selecteduser.imageurl,
      ip: this.selecteduser.ip,
      password: this.selecteduser.password,
      username: this.selecteduser.username,
      university: this.selecteduser.university,
      uDetail: {
        address: this.selecteduser.uDetail.address,
        city: this.selecteduser.uDetail.city,
        state: this.selecteduser.uDetail.state,
      },
      uBank: {
        cardExpire: this.selecteduser.uBank.cardExpire,
        cardNumber: this.selecteduser.uBank.cardNumber,
        cardType: this.selecteduser.uBank.cardType,
        currency: this.selecteduser.uBank.currency,
        iban: this.selecteduser.uBank.iban,
      },
      uCompany: {
        address: this.selecteduser.uCompany.address,
        city: this.selecteduser.uCompany.city,
        department: this.selecteduser.uCompany.department,
        lat: this.selecteduser.uCompany.lat,
        lng: this.selecteduser.uCompany.lng,
        name: this.selecteduser.uCompany.name,
        postalcode: this.selecteduser.uCompany.postalcode,
        state: this.selecteduser.uCompany.state,
        title: this.selecteduser.uCompany.title,
      },
    });
  }
  Update() {
    this.dataservice.updateuser(this.userForm.value);
  }
  back() {
    this.router.navigate(['home']);
  }
}
