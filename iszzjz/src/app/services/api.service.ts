import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string="http://dinella-001-site1.gtempurl.com/api/User/";
  private baseUrl1: string="http://dinella-001-site1.gtempurl.com/api/Cards/";
  private baseUrl2: string="http://dinella-001-site1.gtempurl.com/api/Upload/";
  private baseUrl3: string="http://dinella-001-site1.gtempurl.com/api/Requests";
  private baseUrl4: string="http://dinella-001-site1.gtempurl.com/api/Cards/getall";
  private baseUrl5: string="http://dinella-001-site1.gtempurl.com/api/TravelExpense/getall";
  readonly usersAPIUrl="http://dinella-001-site1.gtempurl.com/api";
  private cardsUrl1: string="http://dinella-001-site1.gtempurl.com/api/Cards/";
  private baseUrl6: string="http://dinella-001-site1.gtempurl.com/api/Guidances/savenewg";
  private baseUrl7: string="http://dinella-001-site1.gtempurl.com/api/Guidances/";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }

  getUserList():Observable<any[]> {
    return this.http.get<any>(this.usersAPIUrl+ '/User/getallusers');
  }

  getCardsInfo(id:number){
    return this.http.get<any[]>(this.baseUrl1+`${id}`)
  } 

  getRTypes(){
    return this.http.get<any>(this.baseUrl2);
  }
  SaveR(userObj: any){
      return this.http.post<any>(`${this.baseUrl2}request`, userObj)
  }
  postNCard(data:any) {
    return this.http.post(this.cardsUrl1, data);
  }
  getReguests(){
    return this.http.get<any>(this.baseUrl3);
  }
  deleteReq(id:number|string) {
    return this.http.delete(this.baseUrl3 + `/${id}`);
  }
  getCards(){
    return this.http.get<any>(this.baseUrl4);
  }
  updateCards(id:number|string, data:any) {
    return this.http.put(this.cardsUrl1 + `${id}`, data);
  }
  getTEList():Observable<any[]> {

    return this.http.get<any>(this.baseUrl5);
  }
  getUpList():Observable<any[]> {

    return this.http.get<any>(this.baseUrl7+ 'getall');
  }
  postUput(data:any) {
    return this.http.post(this.baseUrl6, data);
  }
  getUList(id:number):Observable<any[]> {

    return this.http.get<any>(this.baseUrl7+`${id}`);
  }
}
