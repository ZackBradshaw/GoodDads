import { Component } from '@angular/core';
import { OnDestroy, OnInit, Optional } from '@angular/core';
import { Auth, authState, signOut, User, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from '@angular/fire/auth';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { traceUntilFirst } from '@angular/fire/performance';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly userDisposable: Subscription|undefined;
  public readonly user: Observable<User | null> = EMPTY;

  showLoginButton = true;
  showLogoutButton = true;

  userEmail: string = '';
  userPassword: string = '';

  constructor(@Optional() private auth: Auth, private router: Router) {
    if (auth) {
      this.user = authState(this.auth);
      this.userDisposable = authState(this.auth).pipe(
        traceUntilFirst('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        this.showLoginButton = !isLoggedIn;
        this.showLogoutButton = isLoggedIn;
      });
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  // async loginWithEmailAndPassword() {
  //   return await signInWithEmailAndPassword(this.auth, this.userEmail, this.userPassword);
  // }

  async loginWithGoogle() {
    const res = await signInWithPopup(this.auth, new GoogleAuthProvider());
    await console.log(res);
  }

  async logout() {
    return await signOut(this.auth);
  }
}
