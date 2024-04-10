import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewQueriesComponent } from './view-queries/view-queries.component';
import { ViewAssignedQueryComponent } from './view-assigned-query/view-assigned-query.component';
import { AnsQueryComponent } from './ans-query/ans-query.component';
import { AddQueryComponent } from './add-query/add-query.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViewQueriesComponent,
    ViewAssignedQueryComponent,
    AnsQueryComponent,
    AddQueryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
