xxx.onclick = function () {
    var api = dialog({
        title: 'Modal title',
        content: 'One find body...',
        buttons: [
            {
                text: 'Close'
            },
            {
                text: 'Save changes',
                action: function () {
                    alert(1)
                    return true
                }
            },
        ]
    })
}
window.dialog = function (options) {
    //ES6语法 析构赋值
    let { title, content, buttons } = options
    let $divwrapper = generateHtml()
    let api = {
        close: function () {
            $divwrapper.hide()
        },
        show: function () {
            $divwrapper.show()
        }
    }

    function generateHtml() {
        let $divwrapper = $('<div class=dialog-wrapper></div>')
        let $div = $('<div class=dialog></div>').appendTo($divwrapper)
        $(document.body).append($divwrapper)
        let $title = $('<div class=dialog-title></div>').text(title).appendTo($div)
        let $hr = $('<div class=dialog-hr></div>').appendTo($div)
        let $content = $('<p class=dialog-content></p>').text(content).appendTo($div)
        let $hr2 = $('<div class=dialog-hr></div>').appendTo($div)
        let $buttons = $('<div class=dialog-buttons></div>')
        for (let i = 0; i < buttons.length; i++) {
            let $b = $(`<button class=dialog-button id=button${i}></button>`)
                .text(buttons[i].text)
                .appendTo($buttons)
                .on('click', function () {
                    let action = buttons.action
                    let result = action && action()
                    if (result !== false) {
                        api.close()
                    }
                })
        }
        $buttons.appendTo($div)

        return $divwrapper

    }
    return api
}
