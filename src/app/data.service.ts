import { Injectable } from '@angular/core';

export interface Product{
  pid: number,
  pname: string,
  pprice:number,
  pImage:string,
  punit:string
  pquanitty: number
  pamount: number
  pdiscount: number,
  pcategory:string
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Product[] = [
    {
      pid:1,
      pname:'Organic Carrots',
      pprice:2,
      pImage:'assets/imgs/carrot.png',
      pamount:1,
      punit:'Kg',
      pquanitty: 1,
      pdiscount: 10,
      pcategory:'vegetables'

    },
    {
      pid:2,
      pname:'Onions',
      pprice:2,
      pImage:'assets/imgs/PNG.png',
      pamount:1,
      punit:'Kg',
      pquanitty: 1,
      pdiscount: 10,
      pcategory:'vegetables'
    },

    {
      pid:3,
      pname:'Tomatoes',
      pprice:2,
      pImage:'assets/imgs/tomato.PNG',
      pamount:1,
      punit:'Kg',
      pquanitty: 1,
      pdiscount: 10,
      pcategory:'vegetables'

    },
    {
      pid:4,
      pname:'Pumpkin',
      pprice:2,
      pImage:'assets/imgs/pumpking.PNG',
      pamount:1,
      punit:'Kg',
      pquanitty: 1,
      pdiscount: 10,
      pcategory:'vegetables'

    },
    
  ]
  constructor() { }


  getProducts()
  {
    return this.data;
  }
}
