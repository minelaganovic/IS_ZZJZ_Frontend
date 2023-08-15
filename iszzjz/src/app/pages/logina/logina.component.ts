import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-logina',
  templateUrl: './logina.component.html',
  styleUrls: ['./logina.component.css']
})
export class LoginaComponent  implements OnInit{
  loginForm!: FormGroup;
  message = '';
  constructor(
    private fb: FormBuilder, 
    private auth: AuthService,
    private toast: NgToastService,
    private router: Router,
    private store: UserstoreService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  login() {
    this.auth.logina(this.loginForm.value)
    .subscribe({
      next:(res)=>{
        console.log(res.message);
        this.loginForm.reset();
        this.auth.storeToken(res.token);
        const tokenPayload= this.auth.decodedToken();
        this.store.setUserInfoFromStore(tokenPayload.unique_name)
        this.store.setRoleFromStore(tokenPayload.role)
        this.toast.success({detail: "Uspešno", summary: res.message, duration:5000}); //5000milisekundi
        this.router.navigate(['adminrhome/userrequests']);
      },
      error:(err)=>{
        this.toast.error({detail: "Neuspešno", summary:"Nešto nije u redu!Proverite podatke!", duration:5000})
        console.log(err.message);
      }
    })    
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }

}

