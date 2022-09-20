import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DetailComponent implements OnInit {
  selecteduser: any;
  id: any;
  ubank: any;
  udetail: any;
  ucompany: any;
  details = false;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataserviceService,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.dataservice.getSingleData(this.id).subscribe((data) => {
      this.selecteduser = data;
      this.ubank = this.selecteduser.uBank;
      this.ucompany = this.selecteduser.uCompany;
    });
  }

  back() {
    this.router.navigate(['home']);
  }

  // saveData() {
  //   this.dataservice.updateUser(this.id, this.userForm.value);
  //   this.displayStyle = 'none';
  //   this.displayStyle1 = 'none';
  //   this.displayStyle2 = 'none';
  //   this.displayStyle3 = 'none';
  // }

  showDetails() {
    this.details = true;
  }
  updateuser(val: any) {
    this.router.navigate(['/update', val]);
  }
}
