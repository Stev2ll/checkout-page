const email = document.getElementById("mail");
const number = document.getElementById("phone");
const name = document.getElementById("username");
const address = document.getElementById("address");
const city = document.getElementById("city");
const  postalCode= document.getElementById("postalcode");


document.addEventListener("submit", e =>{
    if (name.length <= 35 || /^\s+$/.test(name)) 
    {
        document.getElementById("username").focus();
        document.getElementById("username").style.borderColor="green";
        alert('Nice')
    }
})
