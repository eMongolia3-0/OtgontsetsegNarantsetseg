function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var code1 = document.getElementById("code1").value;
    var code2 = document.getElementById("code2").value;

    if(code1 === "У" && code2 == "Ц"){
        if (username === "02240521" && password === "85828675Aa.") {
            window.location.href = "./emongoliaPHP.html";
        } else {
            
            alert("Таны нэвтрэх нэр эсвэл нууц үг буруу байна. Шалгаад дахин оролдоно уу!");
            
        }
    }
    else{
        alert("Таны нэвтрэх нэр эсвэл нууц үг буруу байна. Шалгаад дахин оролдоно уу!")
    }


    
}
var showButton = document.getElementById("showButton");
showButton.addEventListener("click", function () {
    var passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showButton.classList.remove("fa-eye-slash");
        showButton.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        showButton.classList.remove("fa-eye");
        showButton.classList.add("fa-eye-slash");
    }
});

