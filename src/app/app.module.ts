import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { PropsComponent } from './props/props.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutesComponent } from './routes/routes.component';
import { ElseComponent } from './else/else.component';
import { ExampleComponent } from './example/example.component';
import { ExampleClassComponent } from './example-class/example-class.component';
import { ExampleAttributeComponent } from './example-attribute/example-attribute.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HooksSubsectionComponent } from './hooks-subsection/hooks-subsection.component';
import { RenderingSubsectionComponent } from './rendering-subsection/rendering-subsection.component';
import { NgOnChangesChildComponent } from './ng-on-changes-child/ng-on-changes-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ListComponent,
    HomeComponent,
    ComponentsComponent,
    PropsComponent,
    PipesComponent,
    RoutesComponent,
    ElseComponent,
    ExampleComponent,
    ExampleClassComponent,
    ExampleAttributeComponent,
    ChildComponentComponent,
    HooksSubsectionComponent,
    RenderingSubsectionComponent,
    NgOnChangesChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
