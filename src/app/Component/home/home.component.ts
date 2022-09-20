import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // variables
  users: any = [];
  userBank: any = [];
  page: number = 0;
  pageSize: number = 11;
  totalElements: number = 0;
  displayedColumns = ['id', 'Name', 'Email', 'Action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public router: Router,
    private dataservice: DataserviceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataservice
      .getUsers(this.pageSize, this.page)
      .subscribe((data: any) => {
        this.users = data;
        this.dataSource = this.users;
        this.dataSource.paginator = this.paginator;
        this.totalElements = this.users.page;
      });
  }

  deleterow(val: any) {
    this.dataservice.deleteUser(val);
  }
  Open() {
    this.dialog.open(AddUserComponent);
    console.log(this.totalElements);
  }

  ViewUser(val: any) {
    this.router.navigate(['/details', val]);
  }
}
