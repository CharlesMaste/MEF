function setup() {
    var x = 0.75 * window.innerWidth
    var y = 0.8 * window.innerHeight

    if (window.innerWidth <= 550) {
        x = 0.98 * window.innerWidth
        y = 0.7 * window.innerHeight

    }

    createCanvas(x, y, WEBGL)
    noLoop()
}

var count = 0
function windowResized() {
    var x = 0.75 * window.innerWidth
    var y = 0.8 * window.innerHeight
    if (window.innerWidth <= 550) {
        x = 0.98 * window.innerWidth
        y = 0.7 * window.innerHeight

    }

    resizeCanvas(x, y)
}
function draw() {
    background(173, 216, 230)
}

function mousePressed() {

}

function fitToWorld(){
    window.alert('FUNFOU')
}

function ZooIN(){
    window.alert('ZooIN')
}

function ZooOut(){
    window.alert('ZooOut')
}

function PanLeft(){
    window.alert('PanLeft')
}

function PanRight(){
    window.alert('PanRight')
}
