import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private db: AngularFirestore) {}
  getPatients() {
    return this.db.collection('patients').snapshotChanges();
  }
}
