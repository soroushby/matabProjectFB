import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { LoadPatientsComponent } from './load-patients/load-patients.component';


@NgModule({
  declarations: [PatientsComponent, AddPatientsComponent, LoadPatientsComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
