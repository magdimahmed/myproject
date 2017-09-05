import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Person } from './person';



@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})



export class ExperimentComponent implements OnInit {

  results: Person[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Person[]>('http://localhost:8095/rest/users/all').subscribe(data => {
      this.results = data;
    });
  }

}
