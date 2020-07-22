import { map } from 'rxjs/operators';
import { PatientsService } from './../../services/patients.service';
import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-load-patients',
  templateUrl: './load-patients.component.html',
  styleUrls: ['./load-patients.component.scss'],
})
export class LoadPatientsComponent implements OnInit {
  patient$: Observable<Patient[]>;

  patients;
  gridApi;
  gApi;
  columnApi;
  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.patient$ = this.patientsService.getPatients();

    // this.patient$ = this.patientsService.getPatients().pipe(
    //   map((data) => {
    //     const patients$: Patient[] = data.map((data) => {
    //       console.log(data.payload.doc.data());   *****why 2 return******
    //       return <Patient>{
    //         id: data.payload.doc.id,
    //         ...data.payload.doc.data(),
    //       };
    //     });

    //   })
    // );

    ////////////
    // this.patient$ = this.patientsService.getPatients().pipe(
    //   map((data) => {
    //     return data.map((data) => {
    //       return <Patient>{
    //         id: data.payload.doc.id,
    //         ...data.payload.doc.data(),
    //       };
    //     });
    //   })
    // );
    /////////
  }
  columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      width: 600,
    },
    {
      headerName: 'Age',
      field: 'age',
      sortable: true,
      filter: true,
    },
    { headerName: 'Number', field: 'number', sortable: true, filter: true },
    { headerName: 'Parity', field: 'parity', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    { headerName: 'Id', field: 'id', sortable: true, filter: true },
  ];

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;

    api.sizeColumnsToFit();
  }

  selectAll() {
    this.gridApi.selectAll();
    // this.patients$.subscribe((data) => data.name);
  }

  deSelectAll() {
    this.gridApi.deselectAll();
  }

  onDeletePatients(id) {
    this.patientsService.deletePatient(id);
  }
}
