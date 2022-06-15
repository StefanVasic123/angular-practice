import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CONTENT } from './data';

@Component({
  selector: 'app-rendering-subsection',
  templateUrl: './rendering-subsection.component.html',
  styleUrls: ['./rendering-subsection.component.css']
})
export class RenderingSubsectionComponent implements OnInit { 
  @Input() text: string; 
  content = CONTENT;

  constructor() { 
    this.text = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  
  ngOnInit(): void {
  }

  inputOnChange(e: any) {
    console.log(e.target.value)
  }

  onClick(obj: object) {
    console.log('clicked: ', obj)
  }

}
