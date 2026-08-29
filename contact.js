document.getElementById("messageForm").addEventListener("submit", function (e) {
const name = document.getElementById("name").value.trim();

if (!name) {
e.preventDefault();
alert("Please enter your name.");
return;
}

alert(`Thank you, ${name}! Your message is being sent.`);
});
