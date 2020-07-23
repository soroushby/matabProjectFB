import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private af: AngularFireAuth) {}
  title = 'mainMatabFB';
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  ngOnInit() {
    this.af.authState.subscribe((user) => console.log(user));
    this.isLoggedIn$ = this.af.authState.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
  }
  logout() {
    console.log('hello');
    this.af.signOut();
  }
}
