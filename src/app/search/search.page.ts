import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchPic: boolean = true;
  items:any;
  isItemAvailable: boolean;
  noResultPic:boolean = false;
  constructor(public Data: DataService) { }

  ngOnInit() {
    this.isItemAvailable = false;
  }

  CloseList()
  {
    this.isItemAvailable = false;
    this.searchPic = true;
    this.noResultPic = false;
  }

  initializeItems(){
    this.items = this.Data.getProducts();
    }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    this.searchPic = false;
    // set val to the value of the searchbar
    const val = ev.target.value;
   
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '')
     {
        this.isItemAvailable = true;
        this.noResultPic = true;
        this.items = this.items.filter((item) => {

        return (item.pname.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })

      console.log(this.items.length);
      if(this.items.length == 0)
      {
        this.noResultPic = true
      }

      else{
        this.noResultPic = false;
      }
    
    }

    else
    {
      this.isItemAvailable = false;
    }
    }

}
