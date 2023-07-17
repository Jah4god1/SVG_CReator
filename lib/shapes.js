class Shape{
    constructor(){
        this.color = "";
    }

    setColor(color){
        this.color = color;
    }

}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    render(){
        return ` <polygon points="50,0 90,90 0,90" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render(){
        return `<rect x="90" y="60" height="150" width= "150" fill="${this.color}"/>`
    }
}

module.exports={Circle,Triangle,Square}