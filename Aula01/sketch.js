function setup() {
    var x = 0.75 * window.innerWidth
    var y = 0.8 * window.innerHeight

    if (window.innerWidth <= 550) {
        x = 0.98 * window.innerWidth
        y = 0.7 * window.innerHeight

    }

    createCanvas(x, y, WEBGL)
    noLoop()

    /* instanciar um objeto */
    _model = new Model()
    _view  = new view ()

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
    _model.showModel()
    _view.showCamera()
}

function mouseMoved() {
    
}

function mousePressed() {

}

function fitToWorld() {
    window.alert('funfou')
    
}

function ZooIN() {
    _model.color1 = _model.color1 - 10
    _model.color2 = 10
    _model.color3 -= 10
    redraw()
}

function ZooOut() {
    _model.color1 = _model.color1 + 10
    _model.color2 = 10
    _model.color3 = 10
    redraw()
}

function PanLeft() {
    _view._left +=1
    _view._right +=1
    redraw()
}

function PanRight() {
    _view._left -=1
    _view._right -=1
    redraw()
}

function PanUp() {
    window.alert('PanUp')
}
function PanDown() {
    window.alert('PanDown')
}
