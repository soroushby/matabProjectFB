import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [AboutComponent, AboutMeComponent, ContactUsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
