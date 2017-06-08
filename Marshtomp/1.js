LazyMan(“Hank”) 输出:
    Hi!This is Hank!
    LazyMan(“Hank”).sleep(10).eat(“dinner”) 输出
Hi!This is Hank!
    //等待10秒..
    Wake up after 10
Eat dinner~
    LazyMan(“Hank”).eat(“dinner”).eat(“supper”) 输出
Hi This is Hank!
    Eat dinner~
    Eat supper~
    LazyMan(“Hank”).sleepFirst(5).eat(“supper”) 输出
    //等待5秒
Wake up after 5
Hi This is Hank!
    Eat supper

function LazyMan(name) {
    console.log('Hi!This is ' + name + ' !')
}
LazyMan('hank')

function sleep(number) {
    setTimeout(function() {
        console.log('Wake up after ' + number)
    }, number * 1000);
}
sleep(10)

function eat(food) {
    console.log('Eat ' + food + '~')
}
eat('dinner')

function sleepFirst(number) {

}




function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

function light() {
    new Promise(function(resolve) {
        setInterval(function() {
            red()
        }, 3000)
        resolve()
    }).then(function() {
        setInterval(function() {
            yellow()
        }, 2000)
    }).then(function() {
        setInterval(function() {
            green()
        }, 1000)

    })
}
light()





var tic = function(timmer, cb) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            cb();
            resolve();
        }, timmer);
    });
};


//
function createWaitPromise(second) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Wake up after ' + second);
        }, second * 1000);
    });
}

function LazyMan(name) {
    var p = new Promise(function(resolve, reject) {
        resolve('Hi! This is ' + name + '!');
    });

    return {
        sleep: function(second) {
            p = p.then(function(msg) {
                console.log(msg);
                return createWaitPromise(second);
            });
            return this;
        },
        sleepFirst: function(second) {
            var op = p;
            p = createWaitPromise(second).then(function(msg) {
                console.log(msg);
                return op;
            });
            return this;
        },
        eat: function(part) {
            var pn = new Promise(function(resolve) {
                resolve('Eat ' + part + '~');
            });
            p = p.then(function(msg) {
                console.log(msg);
                return pn;
            });
            return this;
        },
        print: function() {
            return p.then(function(msg) {
                console.log(msg);
            });
        }
    };
}

exports.LazyMan = LazyMan;