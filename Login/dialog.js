    function generateHtml() {
        let $divwrapper = $('<div class=dialog-wrapper></div>')
        let $div = $('<div class=dialog></div>').appendTo($divwrapper)
        $(document.body).append($divwrapper)
        let $title = $('<div class=dialog-title>Modal title</div>').appendTo($div)
        let $hr = $('<div class=dialog-hr></div>').appendTo($div)
        let $content = $('<p class=dialog-content>One find body...</p>').appendTo($div)
        let $hr2 = $('<div class=dialog-hr></div>').appendTo($div)
        let $buttons = $('<div class=dialog-buttons></div>')
        $buttons.appendTo($div)
        let $button1 = $('<button class=dialog-button id=button0>Close</button>').appendTo($buttons)
        let $button2 = $('<button class=dialog-button id=button1>Save changes</button>').appendTo($buttons)

        return $divwrapper

    }
    generateHtml()