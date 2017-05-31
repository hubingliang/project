signIn.onclick = function() {
    let logindeg = -2
    let signdeg = 90
    var int = setInterval(function() {
        console.log('sd')
        login.style.transform = `rotateY(${logindeg}deg)`
        if (logindeg > -90) {
            logindeg = logindeg - 2
        }
        if (logindeg <= -90) {
            sign.style.transform = `rotateY(${signdeg}deg)`
            signdeg = signdeg - 2
            if (signdeg <= 0) {
                clearInterval(int)
            }
        }
    }, 10);

}

back.onclick = function() {
    let logindeg = -90
    let signdeg = 0
    var int = setInterval(function() {

        sign.style.transform = `rotateY(${signdeg}deg)`
        if (signdeg < 90) {
            signdeg = signdeg + 2
        }
        if (signdeg >= 90) {
            login.style.transform = `rotateY(${logindeg}deg)`
            logindeg = logindeg + 2
            if (logindeg >= 0) {
                clearInterval(int)
            }
        }
    }, 10);
}


register.onclick = function() {
    let logindeg = 2
    let registerdeg = 90
    var int = setInterval(function() {

        login.style.transform = `rotateY(${logindeg}deg)`
        if (logindeg < 90) {
            logindeg = logindeg + 2
        }
        if (logindeg >= 90) {
            Register.style.transform = `rotateY(${registerdeg}deg)`
            registerdeg = registerdeg - 2
            if (registerdeg <= 0) {
                clearInterval(int)
            }
        }
    }, 10);

}

back2.onclick = function() {
    let logindeg = 90
    let registerdeg = 0
    var int = setInterval(function() {

        Register.style.transform = `rotateY(${registerdeg}deg)`
        if (registerdeg < 90) {
            registerdeg = registerdeg + 2
        }
        if (registerdeg >= 90) {
            login.style.transform = `rotateY(${logindeg}deg)`
            logindeg = logindeg - 2
            if (logindeg <= 0) {
                clearInterval(int)
            }
        }
    }, 10);
}