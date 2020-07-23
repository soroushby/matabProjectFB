import { PatientsService } from './../../services/patients.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.scss'],
})
export class AddPatientsComponent implements OnInit {
  patientForm: any;
  tester: any;
  parities = [
    { name: 'G' },
    { name: 'P' },
    { name: 'Ab' },
    { name: 'L' },
    { name: 'D' },
  ];
  constructor(
    private fb: FormBuilder,
    private patientsService: PatientsService
  ) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      number: ['', Validators.required],
      parity: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onAddPatient() {
    this.patientsService.addPatients(
      this.patientForm.get('name').value,
      this.patientForm.get('age').value,
      this.patientForm.get('number').value,
      this.patientForm.get('parity').value,
      this.patientForm.get('date').value
    );
  }
}
