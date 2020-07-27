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
        return "Trip ["+this.id +" "+ this.name +" "+ this.imageUrl +" "+ this._price +"]";
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
        return "Free" + "Trip ["+this.id +" "+ this.name +" "+ this.imageUrl +" "+ this._price +"]";
    }
}
    const freeTrip = new FreeTrip("nantes","Nantes"," img/nantes.jpg");
    freeTrip.price = 0;

    Go(freeTrip.toString());

    //<-----------Promise,Set,Map,Arrow function---------->

    