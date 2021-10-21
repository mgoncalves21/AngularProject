import {Component} from "@angular/core";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html'

})

export class HotelListComponent{
  public title = 'Liste hotels'

  public hotels: any[] = [{

    HotelId: 1,
    HotelName: 'john',
    description: 'Luxe',
    price: 159,
    imageUrl: 'assets/img/hotel1.jpg'
  },{
    HotelId: 2,
    HotelName: 'jane',
    description: 'bad',
    price: 122,
    imageUrl: 'assets/img/hotel2.jpg'
  },{
    HotelId: 3,
    HotelName: 'Mercato',
    description: 'Good',
    price: 259,
    imageUrl: 'assets/img/hotel3.jpg'
  },{
    HotelId: 4,
    HotelName: 'john',
    description: 'ça passe',
    price: 58,
    imageUrl: 'assets/img/hotel4.jpg'
  },{
    HotelId: 5,
    HotelName: 'john',
    description: 'Horrible',
    price: 30,
    imageUrl: 'assets/img/hotel5.jpg'
  }
  ];
  public showBadge: boolean = false;

  public toggleIsNewBadge(): void{
    this.showBadge = !this.showBadge;
  }

}
