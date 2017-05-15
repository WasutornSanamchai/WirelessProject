import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth, private platform: Platform, private Facebook:Facebook) {
    //console.log('Hello AuthService Provider');
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
      return this.auth$.login({provider: AuthProviders.Facebook, method: AuthMethods.Popup});
  }

  signOut(): void {
    this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.facebook.displayName; 
    } else {
      return '';
    }
  }

  displayEmail(): string {
    if (this.authState != null) {
      return this.authState.facebook.email;
    } else {
      return '';
    }
  }

  displayUID(): string {
    if (this.authState != null) {
      return this.authState.facebook.uid
    } else {
      return '';
    }
  } 

  displayImg(): string {
    if (this.authState != null) {
      return this.authState.facebook.photoURL
    } else {
      return '';
    }
  }
}
