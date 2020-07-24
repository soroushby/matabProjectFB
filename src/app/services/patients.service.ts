import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  constructor(private db: AngularFirestore) {}
  getPatients(): Observable<Patient[]> {
    return this.db
      .collection('patients')
      .snapshotChanges()
      .pipe(
        map((data) =>
          data.map(
            (data) =>
              <Patient>{
                id: data.payload.doc.id,
                ...(data.payload.doc.data() as Patient),
              }
          )
        )
      );
  }

  addPatients(name, age, number, parity, date) {
    this.db.collection('patients').add({
      name: name,
      age: age,
      number: number,
      parity: parity,
      date: date,
    });
  }

  deletePatient(Id) {
    this.db.collection('patients').doc(Id).delete();
  }
}
