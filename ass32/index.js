let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = 1;
for (let i = 0; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase()) != true) {
        console.log(`${counter} => ${friends[i]}`);
        counter++;
    }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"