class view{
    constructor(){
        //atributos
        this.x = 0
        this.y = 0
        this.z = (height/2)/(PI/6)

        this.centerX = 0
        this.centerY = 0
        this.centerZ = 0

        this.upX = 0
        this.upY = 1
        this.upZ = 0

        this._left   = -1
        this._right  = 8
        this._bottom = 
        this._top    = 9
        this._near   = 0.1
        this._far    = 1000


        //camera

        this.cam = createCamera(this.x,this.y,this.z,
                               this.centerX,this.centerY,this.centerZ,
                                this.upX,this.upY,this.upZ)

        this.cam.ortho(this._left, this._right, this._bottom,
            this._near, this._top,  this._far)
    }

    showCamera(){
        this.cam.setPosition(this.x,this.y,this.z)
        this.cam.lookAt(this.centerX,this.centerY,this.centerZ)
        this.cam.ortho(this._left, this._right, this._bottom,
             this._near, this._top, this._far)
        

    }
}