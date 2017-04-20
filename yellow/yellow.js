var x = 0
var y = 0
function step() {
    $('.parent').css({
        transform: 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
    })
    x = Math.random() * 90 - 45
    y = Math.random() * 90 - 45

    setTimeout(step, 1000)
}
step()