document.getElementById('login-btn').addEventListener('click' , function(){
    const email = 'sontan@baap.com' ;
    const password = 'secret' ;
    const userEmail = document.getElementById('user-email').value ;
    const userPassword = document.getElementById('user-password').value ;
    if (userEmail == email && userPassword == password){
        window.location.href = 'dashboard.html'
    }
    else{
        alert('User Not Found')
    }
})
