import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  selecteduser: any;
  id: any;
  displayStyle = 'none';
  displayStyle1 = 'none';
  displayStyle2 = 'none';
  displayStyle3 = 'none';
  userForm = this.fb.group({
    personal: this.fb.group({
      firstName: [],
      age: [],
      email: [],
      macAddress: [],
      birthDate: [],
    }),
    bank: this.fb.group({
      cardnum: [],
      cardtype: [],
      currency: [],
      iban: [],
      cardexpire: [],
    }),
    address: this.fb.group({
      address: [],
      city: [],
      postalcode: [],
      state: [],
    }),
    companyAddress: this.fb.group({
      address: [],
      city: [],
      postalcode: [],
      state: [],
      department: [],
      title: [],
    }),
  });

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
    this.selecteduser = this.dataservice.getSingleData(this.id);
    this.userForm.setValue({
      personal: {
        firstName: this.selecteduser.firstName,
        age: this.selecteduser.age,
        email: this.selecteduser.email,
        macAddress: this.selecteduser.macAddress,
        birthDate: this.selecteduser.birthDate,
      },
      bank: {
        cardnum: [],
        cardtype: [],
        currency: [],
        iban: [],
        cardexpire: [],
      },
      address: {
        address: [],
        city: [],
        postalcode: [],
        state: [],
      },
      companyAddress: {
        address: [],
        city: [],
        postalcode: [],
        state: [],
        department: [],
        title: [],
      },
    });
  }

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  openPopup1() {
    this.displayStyle1 = 'block';
  }
  closePopup1() {
    this.displayStyle1 = 'none';
  }
  openPopup2() {
    this.displayStyle2 = 'block';
  }
  closePopup2() {
    this.displayStyle2 = 'none';
  }
  openPopup3() {
    this.displayStyle3 = 'block';
  }

  closePopup3() {
    this.displayStyle3 = 'none';
  }

  back() {
    this.router.navigate(['home']);
  }

  saveData() {
    this.dataservice.updateUser(this.id, this.userForm.value);
  }
}
