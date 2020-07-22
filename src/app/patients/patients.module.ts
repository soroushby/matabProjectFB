import { MaterialModule } from './../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { LoadPatientsComponent } from './load-patients/load-patients.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PatientsComponent,
    AddPatientsComponent,
    LoadPatientsComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
})
export class PatientsModule {}
