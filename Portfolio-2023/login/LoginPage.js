function Login(event) {
    
    let fnm = document.getElementsByName("ffm")[0].value;
    let pswd = document.getElementsByName("pswd")[0].value;
    let res = document.getElementsByClassName("val");
    if (fnm === "" || fnm === null) {
        let err = document.getElementsByClassName("error");
        let fm = document.getElementsByName("ffm");
        err[0].innerText = "Field is Empty";
        err[0].style.color = "red";
        fm[0].style.border = "2px solid red";
    } else if (pswd === "" || pswd === null) {
        let er = document.getElementsByClassName("error2");
        let pd = document.getElementsByName("pswd");
        er[0].innerText = "Field is Empty";
        er[0].style.color = "red";
        pd[0].style.border = "2px solid red";
    } else if (fnm === "mahan" && pswd === "0000") {
        window.location.href = 'OTP.html';
    } else {
        res[0].innerText = "Enter Proper Credentials";
        res[0].style.color = "red";
    }
    event.preventDefault(); 
}
