const aCar = {
    owner : "Joe Bloggs",
    type : {
        make: "Toyota",
        model: "Corolla",
        CC: "1.8"
        
    },
    registration : {
        year: "201",
        county: "WD",
        number: "1058"
        
    }
  };

  aCar.mileage = "100000" ;

  aCar.colour ={
    paint: "red",
    interior: {
        texture: "Leather",
        colour: "Cream"
    }
    
  }

  


  
  console.log(aCar.owner);
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log("Reg. = " + aCar.registration.year +"-"+ aCar.registration.county + "-" + aCar.registration.number )
  console.log("Milage = " + aCar.mileage)
  console.log("It is a " + aCar.colour.paint + " car, " + aCar.mileage + " mileage, " + " with " + aCar.colour.interior.texture + " interior" )