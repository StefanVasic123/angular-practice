import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-else',
  templateUrl: './else.component.html',
  styleUrls: ['./else.component.css']
})
export class ElseComponent implements OnInit {
  title="TITLE (setted from props)"
  constructor() { }

  ngOnInit(): void {
  }

}
