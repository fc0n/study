import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user!: User
  isLoggedIn: string | null = JSON.stringify(localStorage.getItem('isLoggedIn')?.slice(1, -1))

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    ) { }

    async signIn(email: string, password: string){
      let success: boolean = false
      await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', JSON.stringify(res.user))
        this.router.navigate(['/inicio/agenda'])
        success = true
      })
      .catch(err => {
        console.error(err)
        success = false
      })
      return success
    }
  
    async signUp(email: string, password: string, name: string){
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('isLoggedIn', 'true')
        this.user = {
          key: '',
          name: name,
          email: email,
          password: password
        }
        localStorage.setItem('user', JSON.stringify(res.user))
        this.router.navigate(['/login'])
      })
    }
}
