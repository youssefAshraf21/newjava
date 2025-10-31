function getDetails(zName, zAge, zCountry) {
function namePattern(zName) {
    let name = zName.split(" ");
    return `${name[0] , name[1].charAt(0).toUpperCase()}.`;
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
}
function ageWithMessage(zAge) {
    let age = zAge.split(" ");
    return `Your Age Is ${age[0]}`
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
}
function countryTwoLetters(zCountry) {
    let country = zCountry.slice(0,2.).toUpperCase();
    return `You Live In ${country}`;
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
}
function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
}
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY