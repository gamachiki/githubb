function validateform(){
    var fname = document.getElementsByClassName("firstName"),
        lname = document.getElementsByClassName("lastName"),
  phone = document.getElementsByClassName("phone"),
        email = document.getElementsByClassName("email"),
        gender = document.getElementsByClassName("gender");
    if (fname == null || fname == "" && lname == null || lname ==""){
        alert("Không được để trống!");
        return false;
    }

}
function formValidate(){
    var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    var email = document.getElementById("email").value;
    if (regExp.test(email))
        alert('Email hợp lệ!');
    else
        alert('email không hợp lệ!');
}

