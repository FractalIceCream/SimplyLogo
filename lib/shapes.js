class Shape {
    constructor(text, color, objColor) {
        this.text = text;
        this.color = color;
        this.objColor = objColor;
    }

    setText(text) {
        return this.text = text;
    }

    setColor(color) {
        return this.color = color;
    }

    setObjColor(objColor) {
        return this.objColor = objColor;
    }

    render() {
        throw new Error("Render method must be called through the Child Class");
    }
}

class Circle extends Shape {
    constructor(text, color, objColor) {
        super(text, color, objColor);
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <g><circle cx="150" cy="100" r="80" fill="${this.objColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></g></svg>`;
        
    };
}

class Square extends Shape {
    constructor(text, color, objColor) {
        super(text, color, objColor);
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <g><rect x="70" y="20" width="160" height="160" fill="${this.objColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></g></svg>`;
        
    };
}

class Triangle extends Shape {
    constructor(text, color, objColor) {
        super(text, color, objColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <g><polygon points="20,180 150,20 280,180"fill="${this.objColor}" />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></g></svg>`;
        
    };
}

module.exports = { Circle, Square, Triangle };