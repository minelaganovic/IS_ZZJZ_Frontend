import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;
  //public invaildRPWD: boolean = false;

  constructor(
    private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: NgToastService
  ) {}
 
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      date: ['', Validators.required],
      place: ['', Validators.required],
      jmbg: ['', Validators.required],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      rpwd: [
        '',
      [
        Validators.required,
      ]
    ]
    },{
      Validators:this.invaildRPWD
      ///proveriti kasnije
    });
  }

  invaildRPWD(){
    if(this.registerForm.get('rpwd')?.value !==this.registerForm.get('pwd')?.value)
    return true
    else 
    return false
  }
  
  register() {
    if(this.registerForm.valid && !this.invaildRPWD()){
     this.auth.signUp(this.registerForm.value)
    .subscribe({
      next:(res)=>{
        //alert(res.message);
        this.toast.success({detail: "Uspešno", summary: res.message, duration:5000}); //5000milisekundi
        this.registerForm.reset();
        this.router.navigate(['login']);
      },
      error:(err)=>{
        //alert(err.message)
        this.toast.error({detail: "Neuspešno", summary:"Nešto nije u redu!Proverite podatke!", duration:5000})
      }
    }) } else{

    }  
  }

  //#region Getters
  get FirstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get Address(): FormControl {
    return this.registerForm.get('address') as FormControl;
  }
  get date(): FormControl {
    return this.registerForm.get('date') as FormControl;
  }
  get place(): FormControl {
    return this.registerForm.get('place') as FormControl;
  }
  get jmbg(): FormControl {
    return this.registerForm.get('jmbg') as FormControl;
  }
  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }
  get RPWD(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }

}

