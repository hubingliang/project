signIn.onclick = function() {
    let logindeg = -1
    let signdeg = 90
    var int = setInterval(function() {

        login.style.transform = `rotateY(${logindeg}deg)`
        if (logindeg > -90) {
            logindeg = logindeg - 1
        }
        if (logindeg <= -90) {
            sign.style.transform = `rotateY(${signdeg}deg)`
            signdeg = signdeg - 1
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
            signdeg = signdeg + 1
        }
        if (signdeg >= 90) {
            login.style.transform = `rotateY(${logindeg}deg)`
            logindeg = logindeg + 1
            console.log(signdeg)
            if (logindeg >= 0) {
                clearInterval(int)
            }
        }
    }, 10);
}