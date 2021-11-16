import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dating';
  users: any;
  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.http.get('https://localhost:44385/api/users')
      .subscribe(
        res => {
          this.users = res;
        }, err => {
          console.log(err);
        }
      )
  }
}
