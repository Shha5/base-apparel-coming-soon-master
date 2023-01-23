function validation()
{
var form = document.getElementById("form");
var email = document.getElementById("email").value;
var alert = document.getElementById("alert");
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(email.match(pattern))
{
form.classList.add("valid");
form.classList.remove("invalid");
alert.innerHTML = "";
}

else 
{
form.classList.remove("valid");
form.classList.add("invalid");
alert.innerHTML = "Please provide a valid email"
}

if(email = "")
{
    form.classList.remove("valid");
    form.classList.remove("invalid");
    alert.innerHTML = "";
}
}