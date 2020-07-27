var Go = console.log;

// <---------------------LET------------------->

/*function ville(){
    let favoriteCityId ='rome';
    Go(favoriteCityId);
} 

let favoriteCityId ='Paris';
Go(favoriteCityId);
ville();
*/

let favoriteCityId ='rome';
Go(favoriteCityId);

favoriteCityId ="paris"; 
Go(favoriteCityId);


// <-----------------CONST: ----------------->

const citiesId=["paris","nyc","rome","rio-de-janeiro"];
    Go(citiesId);

// citiesId =[];
  // Go(citiesId); // --> une erreur se produit quand on compile.

citiesId.push("tokyo");
Go(citiesId);

//<--------Création d'objet-------------->

function getWeather(cityId){
    let city = cityId.toUpperCase(); 
    let temperature = 20;
    return { city, temperature };
}
const weather = getWeather(favoriteCityId);
Go(weather);

//<---------Affectation destructurée---------->

const{ city,temperature } = weather;
Go(city);
Go(temperature);

//<-----------Rest Operator----------->
const [parisId, nycId, ...othersCitiesId] = citiesId;
Go(parisId);
Go(nycId);
Go(othersCitiesId.length);

//<----------Classes----------->

class Trip {
    constructor(id,name,imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        this._price=newPrice;
    }

    toString(){
        return `Trip [${this.id} ${this.name} ${this.imageUrl} ${this._price}]`;
    }

    static getDefaultTrip(){
        return new Trip ("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg");
    }
}
    let parisTrip = new Trip('paris','Paris','img/paris.jpg');
    parisTrip.price=100;

    const defaultTrip =  Trip.getDefaultTrip();

    Go(parisTrip.toString());
    Go(parisTrip.name);
    Go(defaultTrip.toString());


    //<---------Heritage--------->

class FreeTrip extends Trip {

    toString(){
        return `FreeTrip [${this.id} ${this.name} ${this.imageUrl} ${this._price}]`;
    }
}
    const freeTrip = new FreeTrip("nantes","Nantes"," img/nantes.jpg");
    freeTrip.price = 0;

    Go(freeTrip.toString());

    //<-----------Promise,Set,Map,Arrow function---------->

    class TripService {
        constructor(clé,voyage,valeur) {
        
            const Trip1 = new Trip('paris', 'Paris', 'img/paris.jpg');
            const Trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg');
            const Trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
            this.setTrips = new Set();
            this.setTrips.add(Trip1);
            this.setTrips.add(Trip2);
            this.setTrips.add(Trip3);

            }
            findByName(tripName) {
        return new Promise((resolve, reject) => { 
            
            setTimeout( () => {
                         for (const trip of this.setTrips) // attention faut pas mettre in mais of!
                             if (trip.name == tripName){
                                 resolve(trip);
                             }
                         
                         reject(`No trip with name${tripName}`);
        
                        }, 2000) 
                    });
                } 
            }
        class PriceService {
        constructor() {
        this.prices = new Map();
        this.prices.set('paris', 100);
        this.prices.set('rio-de-janeiro', 800);
            }
            findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => { 
            setTimeout( () => {
                if (this.prices.has(tripId)){
                    resolve(this.prices.get(tripId));
                }
                reject(`No price found for id ${tripId}`);
        
            },2000)
        });
            }
            
        }

        const tripService = new TripService();
        const priceService = new PriceService();

        tripService.findByName('Paris').then(trip => Go("Trip found : "+trip), error => Go(error));
        tripService.findByName('Toulouse').then(trip => Go(trip), error => Go(error));

        tripService.findByName('Rio de Janeiro').then(trip=>trip.id).
        then(id =>priceService.findPriceByTripId(id)).then(price=>Go("Price found : "+ price)).catch(err=>Go("Error "+err));
        
        tripService.findByName('Nantes').then(trip=>trip.id).
        then(id =>priceService.findPriceByTripId(id)).then(price=>Go("Price found : "+ price)).catch(err=>Go(err));