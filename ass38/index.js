function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100){
        console.log("Age Out Of Range");
    }else {
        let Months = theAge * 12;
        let Weeks = Months * 4;
        let Days = theAge * 365;
        let Hours = Days * 24;
        let Minutes = Hours * 60;
        let Seconds = Minutes * 60;
        console.log(`Months Example => ${Months} Months`);
        console.log(`Weeks Example => ${Weeks} Weeks`);
        console.log(`Days Example => ${Days} Days`);
        console.log(`Hours Example => ${Hours} Hours`);
        console.log(`Minutes Example => ${Minutes} Minutes`);
        console.log(`Seconds Example => ${Seconds} Seconds`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months