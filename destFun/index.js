const user = {
    theName: "Osama",
    theAge: 39,
    theCountry: "Egypt",
    skills: {
        html: 70,
        css: 80,
        js: 90
    }
}
showDetails(user);

function showDetails({theName: a , theAge: b, skills: { html: htmlSkill }}) {
        console.log(`Your Name Is ${a}`);
        console.log(`Your Age Is ${b}`);
        console.log(`Your skill in html is ${htmlSkill}`);
}