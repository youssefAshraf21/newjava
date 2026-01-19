const user = {
    TheName : "Youssef",
    TheAge  : 25,
    TheGender : "Male",
    TheCountry : "Egypt"      
}
// let theName = user.TheName;
// let theAge = user.TheAge;
// let theGender = user.TheGender;
// let theCountry = user.TheCountry;

// ({TheName , TheAge , TheGender , TheCountry} = user); 
const {TheName , TheAge , TheGender , TheCountry} = user;

console.log(TheName); // Youssef
console.log(TheAge);  // 25
console.log(TheGender); // Male
console.log(TheCountry); // Egypt