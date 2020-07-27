var Go = console.log;

// LET

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


// CONST:

const citiesId=["paris","nyc","rome","rio-de-janeiro"];
    Go(citiesId);

// citiesId =[];
   // Go(citiesId); // --> une erreur se produit quand on compile.

citiesId.push("tokyo");
Go(citiesId);

