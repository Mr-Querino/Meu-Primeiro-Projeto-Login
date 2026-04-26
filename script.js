function login(){
    let user = document.getElementById('user').value
    let pass = document.getElementById('pass').value

    if (user === "admin" && pass ==='123'){
        msg.innirText = 'login ok'
        alert ('login ok')
    } else {
        msg.innirText = 'error'
        alert("error")
}}