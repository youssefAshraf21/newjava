const user = {
    theName: "youssef",
    theAge: 30,
    skills: ["html", "css", "js"],
    address: {
        theCountry: "Egypt",
        theCity: "Cairo"
    }
};

const {theName: n,
    theAge: a,
    skills: [one ,  , three],
    address: {theCountry: e}
    } = user;

    console.log(`My Name Is ${n}`);
    console.log(`My Age Is ${a}`);
    console.log(`My Skills Is ${one}, ${three}`);
    console.log(`I Live In ${e}`);