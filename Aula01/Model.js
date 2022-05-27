class Model {
    constructor() {
        /*Aqui se vai os atributos*/
        this.color1 = 255
        this.color2 = 255
        this.color3 = 255

        this.P1x = 0
        this.p1y = 0

        this.P2x = 5
        this.p2y = 0

        this.P3x = 2.5
        this.p3y = -5
       

    }
    /* Aqui se vai os metodos */
    showModel() {
        push()
        beginShape(LINES);
            vertex(0.5,0)
            vertex(-0.5,0)
        pop()
        
        push()
        beginShape(LINES);
            vertex(0,0.5)
            vertex(-0.5,0)
        pop()
        
        push()
        beginShape(TRIANGLES);
        noStroke()

        fill(0, this.color1, 0)
        vertex(this.P1x, this.p1y);

        fill(this.color2, 0, 0)
        vertex(this.P2x, this.p2y);

        fill(0, 0, this.color3)
        vertex(this.P3x, this.p3y);
        endShape();
        pop()
    }
}