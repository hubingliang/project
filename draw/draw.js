
var box = document.querySelector('.Draw')

function brushtrack(x, y) {
    let div = document.createElement('span')
    div.class = 'track'
    div.style.position = 'absolute'
    div.style.top = y + 'px'
    div.style.left = x + 'px'
    div.style.height = '5px'
    div.style.width = '5px'
    div.style.background = 'black'
    document.body.appendChild(div)
}

function colortrack(x, y) {
    let div = document.createElement('a')
    div.class = 'track'
    div.style.position = 'absolute'
    div.style.top = y + 'px'
    div.style.left = x + 'px'
    div.style.height = '5px'
    div.style.width = '5px'
    div.style.background = getRandomColor()
    document.body.appendChild(div)
}




var getRandomColor = function () {
    return '#' +
        (function (color) {
            return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                && (color.length == 6) ? color : arguments.callee(color);
        })('');
}

var brush = document.querySelector('#brush')

brush.addEventListener('touchstart', function (e) {
    e.preventDefault()
    box.addEventListener('touchmove', function (e) {
        e.preventDefault()
        let { pageX, pageY } = e.touches[0]
        brushtrack(pageX, pageY)
    })
    box.addEventListener('touchstart', function (e) {
        e.preventDefault()
        let { pageX, pageY } = e.touches[0]
        brushtrack(pageX, pageY)
    })

})


var load = document.querySelector('#load')
load.addEventListener('touchstart', function () {
    history.go(0)
})

var color = document.querySelector('#color')
color.addEventListener('touchstart', function () {
    box.addEventListener('touchmove', function (e) {
        e.preventDefault()
        let { pageX, pageY } = e.touches[0]
        colortrack(pageX, pageY)
    })
    box.addEventListener('touchstart', function (e) {
        e.preventDefault()
        let { pageX, pageY } = e.touches[0]
        colortrack(pageX, pageY)
    })
})