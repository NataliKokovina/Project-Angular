
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
    fireplace: boolean;
    balcony: boolean;
    parkingPlace: boolean;
    smokeDetector: boolean;
  };
  limitation:  {
    forBoyOnly: boolean;
    forGirlOnly: boolean;
    forFamilyOnly: boolean;
    withoutChildren: boolean;
    notForStudents: boolean;
    withoutPets: boolean;
    notForSmokingPeople: boolean;
    notForForeigners: boolean;
  };
  bath: {
    toilet: boolean;
    yardToilet: boolean;
    shower: boolean;
    jacuzzi: boolean;
    pool: boolean;
  };
  lat: number;
  lng: number;
  about: string;
  price: number;
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
