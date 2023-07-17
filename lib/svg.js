class SVG {
    constructor(){
        this.textEl = "";
        this.shapeEl ="";
    }

    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }

    setText(letters,textColor){
        this.textEl= `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${letters}</text>`
    }

    setShape(shape){
        this.shapeEl= shape.render();
    }


}
module.exports = SVG;