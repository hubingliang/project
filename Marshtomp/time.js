var sometime = new Date(Date.UTC(2017, 5, 7, 4, 15, 00))

sometime.setHours(sometime.getHours(), sometime.getMinutes() - sometime.getTimezoneOffset())


setInterval(function() {
    var now = new Date()
    console.log()
    if (now.getFullYear() === 2017) {
        if (now.getMonth() === 5) {
            if (now.getDate() === 18) {
                if (now.getHours() === 10) {
                    if (now.getMinutes() === 0) {
                        if (now.getSeconds() === 0) {
                            //这里写你要的函数
                        }
                    }
                }
            }
        }
    }
}, 1000);