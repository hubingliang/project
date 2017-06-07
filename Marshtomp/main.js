var $palette = $('#palette')
var $span = $('span')
var $skills = $('.skills')

var $skill = $('.skill')


$palette.click(function() {
    $skills.removeAttr("hidden");
    $span.remove()

})
$skill.on('click', function(e) {

    let skill = e.target.getAttribute("name")
    container.className = "container";
    setTimeout(function() {
        container.className = " container animated " + skill;
    }, 10);


})


function triggerAnimation() {

    $container.removeClass('twister')
    setTimeout(function() {
        $container.addClass('intensifies')
    }, 10);

}