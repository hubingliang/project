function step() {
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()

    if (hours > 12) {
        hours = hours - 12
    }
    var secondDeg = seconds / 60 * 360
    var minuteDeg = (minutes * 60 + seconds) / 3600 * 360
    var hourDeg = (hours * 3600 + minutes * 60 + seconds) / (12 * 3600) * 360

    document.querySelector('.second-hand').style.transform = `rotate(${-90 + secondDeg}deg)`

    document.querySelector('.minute-hand').style.transform = `rotate(${-90 + minuteDeg}deg)`

    document.querySelector('.hour-hand').style.transform = `rotate(${-90 + hourDeg}deg)`
}



step()
setInterval(function () {
    step()
}, 1000)