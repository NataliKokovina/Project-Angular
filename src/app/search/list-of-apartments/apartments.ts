export class Apartments{
  name: string;
  age: number;
  id: number;
  guests: number;
  photo: any;
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
  }
}
