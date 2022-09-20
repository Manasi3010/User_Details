import { Component } from '@angular/core';
import { DataserviceService } from './service/dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private dataService: DataserviceService) {}
  ngOnInit() {}
}
