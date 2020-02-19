import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatDividerModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatIconModule
} from '@angular/material';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
