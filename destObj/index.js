const user = {
    TheName : "Youssef",
    TheAge  : 25,
    TheGender : "Male",
    TheCountry : "Egypt",  
    TheColor : "red",
    skills : {
        html : 100,
        css  : 90,
        js   : 80
    }
}
// let theName = user.TheName;
// let theAge = user.TheAge;
// let theGender = user.TheGender;
// let theCountry = user.TheCountry;

// ({TheName , TheAge , TheGender , TheCountry} = user); 
const {TheName: a , TheAge: b , TheGender: c , TheCountry: d , TheColor: e = "Black" , skills: {html: h, css: s, js: j}} = user;

console.log(a); // Youssef
console.log(b);  // 25
console.log(c); // Male
console.log(d); // Egypt
console.log(e); // Black
console.log(` my html skill is ${h}`); // my html skill is 100
console.log(` my css skill is ${s}`); // my css skill is 90
console.log(` my js skill is ${j}`); // my js skill is 80