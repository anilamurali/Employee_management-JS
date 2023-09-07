function loginEmploye() {
     //to set user name in loacal storage
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    if (username=='') {
        alert("Enter your Username")
    }else{

    localStorage.setItem("Usrename",username);

    // redirect 
    window.location= './home.html';
    
    }
    
}