import { Component, NgModule, SimpleChanges, OnInit } from '@angular/core';
import { ExampleComponent } from '../example/example.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})

export class ComponentsComponent implements OnInit {
  htmlString = '<app-example></app-example>'
  classTemplate ='<div class=".app-example-class"></div>'
  attributeTemplate = '[app-example-attribute]'
  htmlAttribute = '<p class="about-subsection-example" app-example-attribute></p>'

  userLoggedIn: boolean = false;
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
