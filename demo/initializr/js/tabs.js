window.tabs = function (element) {
    
    var $tabs = $(element)
    $tabs.on('click', 'ol[data-role=nav]>li', e => {
        let $li = $(e.currentTarget)
        let index = $li.index()
        $li.addClass('active').siblings().removeClass('active')

        $li.closest('ol[data-role=nav]').siblings('ol[data-role=panes]').find('li').eq(index).addClass('active').siblings().removeClass('active')
    })
}

tabs(document.querySelectorAll('.tabs')[0])

tabs(document.querySelectorAll('.tabs')[1])