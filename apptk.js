const loginform = document.getElementById("signin");

loginform.addEventListener("submit", function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    alert("email: " + email + "\npassword: " + password);
    document.write(email + " " + password);
}); 

document.getElementById("w-100").addEventListener("mousemove", function(){
    document.getElementById("w-100").innerHTML = "Đăng nhập";
})
