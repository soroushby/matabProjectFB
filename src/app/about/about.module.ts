import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../modules/material/material.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutComponent, AboutMeComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
})
export class AboutModule {}
