import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

  constructor() { }

//usluge:  
  servicesDetails = [
    {
      id:1,
      sName:"Izdavanje zdravstvene knjižice",
      sDetails:"Uneti tražene informacije, dokaz o tačnosti unetih informacija (Izvod iz matične knjige rođenih)",
      sTime: '10 dana',
      sImg:"https://img.icons8.com/bubbles/200/000000/documents.png"
    },
    {
      id:2,
      sName:"Overa zdravstvene knjižice",
      sDetails:"Potvrda o plaćenom zdravstvenom osiguranju",
      sTime:'1 dan',
      sImg:"https://img.icons8.com/bubbles/200/000000/document.png"
    },
    {
      id:3,
      sName:"Overa uputa lečenja",
      sDetails:"Popuniti formular informacija o uputu",
      sTime:'1 dan',
      sImg:"https://img.icons8.com/bubbles/200/000000/document.png"
    },
    {
      id:4,
      sName:"Regulisanje putnih troškova",
      sDetails:"Popuniti formular o traženim informacijama",
      sTime:'1 dan',
      sImg:"https://img.icons8.com/bubbles/200/000000/documents.png"
    },
    
    
  ]


  

}
