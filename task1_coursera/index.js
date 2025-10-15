function addRecommendation() {
let text = document.getElementById("new-recommendation").value;
if (text.trim() === "") {
    alert("Please write a recommendation before submitting.");
    return;
}

  // Create new recommendation element
let newRec = document.createElement("div");
newRec.classList.add("recommendation");
newRec.innerHTML = `<p>"${text}"</p><h4>– Anonymous</h4>`;

  // Append to existing container
document.getElementById("recommendations-container").appendChild(newRec);

  // Clear the input
document.getElementById("new-recommendation").value = "";

  // Optional: Show a confirmation message
alert("Thank you for your recommendation!");
}
