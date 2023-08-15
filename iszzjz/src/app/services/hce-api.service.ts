import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class hceApiService {
  readonly hceAPIUrl="http://dinella-001-site1.gtempurl.com/api";

  constructor(private http:HttpClient) { 

  }
  getHCEList():Observable<any[]> {

    return this.http.get<any>(this.hceAPIUrl+ '/HCE');
  }

  addHCE(data:any) {
    return this.http.post(this.hceAPIUrl + '/HCE', data);
  }

  updateHCE(id:number|string, data:any) {
    return this.http.put(this.hceAPIUrl + `/HCE/${id}`, data);
  }

  deleteHCE(id:number|string) {
    return this.http.delete(this.hceAPIUrl + `/HCE/${id}`);
  }
  getregisterUserList():Observable<any[]> {
    return this.http.get<any>(this.hceAPIUrl+ '/User');
  }
  getUserList():Observable<any[]> {
    return this.http.get<any>(this.hceAPIUrl+ '/User/getallusers');
  }

  deleteUser(id:number|string){
    return this.http.delete(this.hceAPIUrl + `/User/${id}`);
  }
  updateUser(id:number|string, data:any) {
    return this.http.put(this.hceAPIUrl + `/User/${id}`, data);
  }
  getAdminworkerList():Observable<any[]> {
    return this.http.get<any>(this.hceAPIUrl+ '/Adminworker/getallworkers');
  }
  deleteAdminworker(id:number|string){
    return this.http.delete(this.hceAPIUrl + `/Adminworker/${id}`);
  }
  addaworker(data:any) {
    return this.http.post(this.hceAPIUrl + '/Adminworker/addnewworker', data);
  }

}
