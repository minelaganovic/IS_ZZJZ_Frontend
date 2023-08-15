import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService}from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userPayload:any;
  private baseUrl: string="http://dinella-001-site1.gtempurl.com/api/User/";
  constructor(private http: HttpClient) { 
    this.userPayload=this.decodedToken();
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }
  logina(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticatea`, loginObj)
  }
  loginadmin(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticateadmin`, loginObj)
  }
  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn():boolean{
    return  !!localStorage.getItem('token')
  }
  decodedToken(){ ///funkcija koja salje podatke usera
    const jwtHelper= new JwtHelperService();
    const token= this.getToken()!;
    console.log(jwtHelper.decodeToken(token)) //
    return jwtHelper.decodeToken(token);
  }
  getArrayUFromToken(){
    if(this.userPayload)
    return this.userPayload.name;
  }
  getRoleFromToken(){
    if(this.userPayload)
    return this.userPayload.role;
  }
  
  
}
