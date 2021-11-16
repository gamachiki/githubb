function checkUsername(){
    var elMsg =document.getElementById('feedback');
    if(this.value.length <5) {
        elMsg.textContent = 'username must be 5 characters or more';
    }else{
        elMsg.textContent='';
    }
    ver elUsername = document.getElementById('username');
    elUsername.addEventListener('blur',checkUsername,false);
}