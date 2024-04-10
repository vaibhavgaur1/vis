import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewQueriesComponent } from './view-queries/view-queries.component';
import { HomeComponent } from './home/home.component';
import { ViewAssignedQueryComponent } from './view-assigned-query/view-assigned-query.component';
import { AnsQueryComponent } from './ans-query/ans-query.component';
import { AddQueryComponent } from './add-query/add-query.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'viewQuery',
    component: ViewQueriesComponent,
  },
  {
    path: 'viewAssignedQuery',
    component: ViewAssignedQueryComponent,
  },
  {
    path: 'AnswerQuery',
    component: AnsQueryComponent,
  },
  {
    path: 'addQuery',
    component:AddQueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
