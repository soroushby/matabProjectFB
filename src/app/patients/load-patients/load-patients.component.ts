import { map } from 'rxjs/operators';
import { PatientsService } from './../../services/patients.service';
import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-patients',
  templateUrl: './load-patients.component.html',
  styleUrls: ['./load-patients.component.scss'],
})
export class LoadPatientsComponent implements OnInit {
  patients: Patient[];
  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    // this.patientsService.getPatients().subscribe((data) => {
    //   this.patients = data.map((data) => {
    //     return <Patient>{
    //       id: data.payload.doc.id,
    //       ...data.payload.doc.data(),
    //     };
    //   });
    // });
    //  this.patientsService.getPatients().pipe(data =>data.map
    //     console.log(this.patients);
  }
}
