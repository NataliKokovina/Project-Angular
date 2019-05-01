
export class Apartments{
  id: number;
  name: string;
  guests: number;
  photo: any;
  photo2: any;
  photo3: any;
  photo4: any;
  adress: {
    city: string;
    street: string;
    house: number;
    apartment: number;
  };
  rentType: string;
  placeType: string;
  beds: number;
  kitchenAppliances:  {
    plate: boolean;
    oven: boolean;
    dishwasher: boolean;
    washingMachine: boolean;
    microwave: boolean;
  };
  amenities:  {
    essentialThings: boolean;
    internet: boolean;
    tv: boolean;
    heating: boolean;
    workplace: boolean;
  };
  about: string;
  phoneNumber: string;
}

// "id": 1,
// "name": "1",
// "guests": 5,
// "photo": "/assets/img/1.jpg",
// "adress": {
//   "city": "Київ",
//   "street": "Шевченка",
//   "house": "2",
//   "apartment": "14"
// },
// "rentType": "Все помешкання",
// "placeType": "Приватний будинок",
// "beds": 2,
// "kitchenAppliances":  {
//   "plate": true,
//   "oven": true,
//   "dishwasher": false,
//   "washingMachine": true,
//   "microwave": false
// },
// "amenities":  {
//   "essentialThings": true,
//   "internet": true,
//   "tv": false,
//   "heating": true,
//   "workplace": false
// }
