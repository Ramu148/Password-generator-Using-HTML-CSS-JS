function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    if ((isNaN(length) || length <= 0) && (name==null) ) {
        document.getElementById('password').innerText = 'Please enter a valid length';
        return;
    }
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password = password + charset[randomIndex];
    }
    document.getElementById('password').innerText = `Strong password : ${password}`;

    function message(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    if(name=='' && email==''){
        alert("Please fill the required field");
    }
}
message()
}
