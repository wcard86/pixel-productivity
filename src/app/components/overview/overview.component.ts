import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public months=[{name: 'January', count: 25}, {name: 'February', count: 38}];
  constructor() { }

  ngOnInit() {
  }

}
