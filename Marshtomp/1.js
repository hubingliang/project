function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}
let promise = function() {
    setTimeout(function() {
        function green() {
            console.log('green');
        }
    }, 1000);
}