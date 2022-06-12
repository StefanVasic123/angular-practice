import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CONTENT } from './data';

@Component({
  selector: 'app-rendering-subsection',
  templateUrl: './rendering-subsection.component.html',
  styleUrls: ['./rendering-subsection.component.css']
})
export class RenderingSubsectionComponent implements OnInit { 
  @Input() loggedIn: boolean; 
  content = CONTENT;
  constructor() { 
    this.loggedIn = true;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
