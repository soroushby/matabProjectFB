import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';

import * as firebaseui from 'firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ui: firebaseui.auth.AuthUI;
  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
    private ngzone: NgZone
  ) {}

  ngOnInit(): void {
    firebase.initializeApp(environment.firebaseConfig);
    const uiConfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],

      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this),
      },
    };

    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    this.ui.start('#firebaseui-auth-container', uiConfig);
    this.afauth.authState.subscribe((user) => console.log(user));
  }

  // ngOnDestroy() {
  //   this.ui.delete();
  // }
  onLoginSuccessful(result) {
    this.ngzone.run(() => this.router.navigateByUrl('patients/loadPatients'));
  }
}
