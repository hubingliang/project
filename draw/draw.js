var tool
//毛笔功能
var box = document.querySelector('#canvasWrapper')

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
//彩笔功能

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

//换张纸功能
var load = document.querySelector('#load')
load.addEventListener('touchstart', function () {
    history.go(0)
})

//铅笔功能

var pen = document.querySelector('#pen')
let width = $('#canvasWrapper').width()
let height = $('#canvasWrapper').height()

let $canvas = $('#canvasWrapper')
    .append(`<canvas width="${width}" height="${height}"/>`).children('canvas')
$canvas.css({
    position: 'absolute',
    top: 0,
    left: 0
})
let canvas = $canvas[0]

let lastPoint = null
pen.addEventListener('touchstart', function () {
    pen()
})
var pen = function () {
    $canvas.on('touchstart', function (e) {
        let touch = e.originalEvent.touches[0]
        let { x, y } = getMousePosition($canvas[0], touch)
        touchStartAction(x, y)
    })

    function touchStartAction(x, y) {
        lastPoint = { x: x, y: y }
    }

    $canvas.on('touchmove', function (e) {
        e.preventDefault()
        let touch = e.originalEvent.touches[0]
        let { x, y } = getMousePosition($canvas[0], touch)
        touchMoveAction(x, y)
    })

    function touchMoveAction(x, y) {
        drawLine(lastPoint.x, lastPoint.y, x, y)
        lastPoint = { x: x, y: y }
    }

    function drawLine(x1, y1, x2, y2) {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    function getMousePosition(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
}

//橡皮擦功能
erase.addEventListener('touchstart', function () {

    clean()
})
var clean = function () {
    function erase(x, y, width, height) {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(x - width / 2, y - height / 2, width, height)
    }
    $canvas.on('touchstart', function (e) {
        let touch = e.originalEvent.touches[0]
        let { x, y } = getMousePosition($canvas[0], touch)
        touchStartAction(x, y)
    })

    function touchStartAction(x, y) {
        lastPoint = { x: x, y: y }
    }

    $canvas.on('touchmove', function (e) {
        e.preventDefault()
        let touch = e.originalEvent.touches[0]
        let { x, y } = getMousePosition($canvas[0], touch)
        touchMoveAction(x, y)
    })

    function touchMoveAction(x, y) {
        erase(lastPoint.x, lastPoint.y, 50,50)
        lastPoint = { x: x, y: y }
    }

    function getMousePosition(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
}
//调用
var user = function(){
    
}