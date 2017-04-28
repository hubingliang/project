window.slides = function (element) {
    var $el = $(element)
    var width = $el.width()
    var count = $el.find('.slide').length
    let $view = $el.children('.view')
    let currentIndex = 0
    let timerId
    var $ol = $('<ol class=controls></ol>')
    for (let i = 0; i < count; i++) {
        $ol.append(`<li class=control></li>`)
    }
    $el.append($ol)
    $ol.on('mousemove', 'li', function (e) {
        let $li = $(e.currentTarget)
        let index = $li.index()
        goToSlide(index)
    })

    function goToSlide(index) {
        if (index < 0) {
            index = count - 1
        } else if (index >= count) {
            index = 0
        }
        let number = - width * index
        $view.css({
            transform: `translateX(${number}px)`
        })
        currentIndex = index
    }

    $view.on('mouseenter', function () {
        window.clearInterval(timerId)
    })

    function autoPlay() {
        timerId = setInterval(function () {
            goToSlide(currentIndex + 1)
        }, 3000)
    }
    $view.on('mouseleave', function(){
        autoPlay()
    })
    autoPlay()
}

//

slides(document.querySelector('.slides'))

