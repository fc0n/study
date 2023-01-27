import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';

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
      let success: boolean = false;
      let error: boolean = false;
      await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', JSON.stringify(res.user))
        this.router.navigate(['/inicio/agenda'])
        success = true
      })
      .catch(err => {
        console.error(err)
        error = false
      })
      return success
    }
  
    async signUp(email: string, password: string, name: string){
      let success: boolean = false;
      let error: boolean = false;
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
        success = true
      })
      .catch(err => {
        console.error(err)
        error = false
      })
      return success
    }

    recoverPassword(email: string){
      this.firebaseAuth.sendPasswordResetEmail(email)
      .then(res => alert('Email de recuperação de senha enviado!'))
      .catch(err => alert('Email não possui conta cadastrada!'))
    }

    Loggout(){
      this.firebaseAuth.signOut()
      localStorage.removeItem('isLoggedIn')
      this.router.navigate(['/login'])
    }
}
