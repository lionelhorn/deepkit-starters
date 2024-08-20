export class Config {
  pg = "postgres://"
  host: string;
  
  constructor() {
    this.host = "localhost"
    console.log("Config created")
  }
}