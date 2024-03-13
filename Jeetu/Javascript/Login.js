
function Loginuser() {

    console.log("function run")
    let username = document.getElementById("firstname")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

   

    let defuser = username.value == "Jeetu"
    let defemail = email.value == "Jeetu@123"
    let defpass = password.value == "Jeetu123"

    if (defuser && defemail && defpass) {
        window.location.href = "./newhmtl.html"
    }
    else {
        alert("User Not Authorised")
    }

}







