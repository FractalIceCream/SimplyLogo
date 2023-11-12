class Shapes {
    constructor(text = '', color = '', objColor = '') {
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
}

module.exports = Shapes;