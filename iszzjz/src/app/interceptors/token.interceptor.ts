import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private toast:NgToastService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken=this.auth.getToken();
///provera da li je istekao token i dohvatanje greške
    if(myToken){
      request=request.clone({
        setHeaders: {Authorization: `Bearer ${myToken}`}
      })
    }
    return next.handle(request).pipe(
      catchError((err:any)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this.toast.warning({detail:"Upozorenje", summary:"Token je istekao, Ponovo se prijavite!"});
            this.router.navigate(['']);
          }
        }
        return throwError(()=>new Error ("Desila se neka greška"))
      })
    );
  }
}
