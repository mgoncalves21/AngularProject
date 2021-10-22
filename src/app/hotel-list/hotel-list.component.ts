import {Component, OnInit} from "@angular/core";
import {IHotel} from "./hotel.component";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']

})

export class HotelListComponent implements OnInit {

  public title = 'Liste hotels'

  public hotels: IHotel[] = [{

    HotelId: 1,
    HotelName: 'john',
    description: 'Luxe',
    price: 159,
    imageUrl: 'assets/img/hotel1.jpg'
  },{
    HotelId: 2,
    HotelName: 'Mercato',
    description: 'Good',
    price: 259,
    imageUrl: 'assets/img/hotel3.jpg'
  },{
    HotelId: 3,
    HotelName: 'EAVY',
    description: 'ça passe',
    price: 58,
    imageUrl: 'assets/img/hotel4.jpg'
  },{
    HotelId: 4,
    HotelName: 'CLICKOP',
    description: 'Horrible',
    price: 30,
    imageUrl: 'assets/img/hotel5.jpg'
  }
  ];
  public showBadge: boolean = false;

  private _hotelFilter  = 'Type a filter';
  public filteredHotels: IHotel[] = [];

  ngOnInit(){
    this.filteredHotels = this.hotels;
  }


  public toggleIsNewBadge(): void{
    this.showBadge = !this.showBadge;
  }
  public get hotelFilter(): string{
    return this._hotelFilter;
  }
  public set hotelFilter(filter: string){
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  private filterHotels(critere : string): IHotel[]{
    critere = critere.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.HotelName.toLocaleLowerCase().indexOf(critere) != -1
    );
    return res;
  }

}
