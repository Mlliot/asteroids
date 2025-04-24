export class Neo {
    id: number;
  name: string;
  is_potentially_hazardous_asteroid: boolean;

  constructor(id: number, name: string, hazard: boolean){
    this.id = id;
    this.name = name;
    this.is_potentially_hazardous_asteroid = hazard;
  }
}
