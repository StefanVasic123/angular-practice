import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './home/home.component';
import { PropsComponent } from './props/props.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutesComponent } from './routes/routes.component';
import { ElseComponent } from './else/else.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'components', component: ComponentsComponent },
  { path: 'props', component: PropsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'list', component: ListComponent },
  { path: 'else', component: ElseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
