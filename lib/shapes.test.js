const { Shape, Circle, Triangle, Square} = require('./shapes.js');

describe('Shape and Child class', () => {
    describe('object creation', () => {
        it('should instantiate Shape class object', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        })
        it('should instantiate Circle class object', () => {
            const shape = new Circle();
            expect(shape).toBeInstanceOf(Circle);
        })
        it('should instantiate Square class object', () => {
            const shape = new Square();
            expect(shape).toBeInstanceOf(Square);
        })
        it('should instantiate Triange class object', () => {
            const shape = new Triangle();
            expect(shape).toBeInstanceOf(Triangle);
        })
    })
    describe('object text instantiated', () => {
        it('should instantiate Circle object\'s text', () => {
            const text = 'SVG';
            const shape = new Circle(text);
            expect(shape.text).toEqual(text);
        })
        it('should instantiate Square object\'s text', () => {
            const text = 'SVG';
            const shape = new Square(text);
            expect(shape.text).toEqual(text);
        })
        it('should instantiate Triangle object\'s text', () => {
            const text = 'SVG';
            const shape = new Triangle(text);
            expect(shape.text).toEqual(text);
        })
        it('should set Circle object\'s text', () => {
            const text = 'SVG';
            const shape = new Circle();
            expect(shape.setText(text)).toEqual(text);
        })
        it('should set Square object\'s text', () => {
            const text = 'SVG';
            const shape = new Square();
            expect(shape.setText(text)).toEqual(text);
        })
        it('should set Triangle object\'s text', () => {
            const text = 'SVG';
            const shape = new Circle();
            expect(shape.setText(text)).toEqual(text);
        })
    })
    describe('object text color', () => {
        it('should store text color (color keyword) into Circle object', () => {
            const color = 'green';
            const shape = new Circle('', color);
            expect(shape.color).toEqual(color);
        })
        it('should store text color (color keyword) into Triangle object', () => {
            const color = 'green';
            const shape = new Triangle('', color);
            expect(shape.color).toEqual(color);
        })
        it('should store text color (color keyword) into Square object', () => {
            const color = 'green';
            const shape = new Square('', color);
            expect(shape.color).toEqual(color);
        })
        it('should set text color (keyword) to Circle', () => {
            const color = 'green';
            const shape = new Circle();
            expect(shape.setColor(color)).toEqual(color);
        })
        it('should set text color (keyword) to Triangle', () => {
            const color = 'green';
            const shape = new Triangle();
            expect(shape.setColor(color)).toEqual(color);
        })
        it('shoulde set text color (keyword) to Square', () => {
            const color = 'green';
            const shape = new Square();
            expect(shape.setColor(color)).toEqual(color);
        })
        it('should store text color (hexadecimal) into Circle object', () => {
            const color = '#FFFFFF';
            const shape = new Circle('', color);
            expect(shape.color).toEqual(color);
        })
        it('should store text color (hexadecimal) into Triangle object', () => {
            const color = '#FFFFFF';
            const shape = new Triangle('', color);
            expect(shape.color).toEqual(color);
        })
        it('should store text color (hexadecimal) into Square obejct', () => {
            const color = '#FFFFFF';
            const shape = new Square('', color);
            expect(shape.color).toEqual(color);
        })
        it('should set text color (hexadecimal) to Circle', () => {
            const color = '#FF0000';
            const shape = new Circle();
            expect(shape.setColor(color)).toEqual(color);
        })
        it('should set text color (hexadecimal) to Triangle', () => {
            const color = '#FF0000';
            const shape = new Triangle();
            expect(shape.setColor(color)).toEqual(color);
        })
        it('should set text color (hexadecimal) to Square', () => {
            const color = '#FF0000';
            const shape = new Square();
            expect(shape.setColor(color)).toEqual(color);
        })
    })
    describe('object\'s color', () => {
        it('should store object\'s color (color keyword) into Circle object', () => {
            const objColor = 'black';
            const shape = new Circle('', '', objColor);
            expect(shape.objColor).toEqual(objColor);
        })
        it('should set object color (keyword) to Circle', () => {
            const objColor = 'black';
            const shape = new Circle();
            expect(shape.setObjColor(objColor)).toEqual(objColor);
        })
        it('should store object\'s color (hexadecimal) into Circle object', () => {
            const objColor = '#00FF00';
            const shape = new Circle('', '', objColor);
            expect(shape.objColor).toEqual(objColor);
        })
        it('should set object color (hexadecimal) to Circle', () => {
            const objColor = '#00FF00';
            const shape = new Circle();
            expect(shape.setObjColor(objColor)).toEqual(objColor);
        })
        it('should store object\'s color (color keyword) into Triangle object', () => {
            const objColor = 'black';
            const shape = new Triangle('', '', objColor);
            expect(shape.objColor).toEqual(objColor);
        })
        it('should set object color (keyword) to Triangle', () => {
            const objColor = 'black';
            const shape = new Triangle();
            expect(shape.setObjColor(objColor)).toEqual(objColor);
        })
        it('should store object\'s color (hexadecimal) into Triangle object', () => {
            const objColor = '#00FF00';
            const shape = new Triangle('', '', objColor);
            expect(shape.objColor).toEqual(objColor);
        })
        it('should set object color (hexadecimal) to Triangle', () => {
            const objColor = '#00FF00';
            const shape = new Triangle();
            expect(shape.setObjColor(objColor)).toEqual(objColor);
        })
        it('should store object\'s color (color keyword) into Square object', () => {
            const objColor = 'black';
            const shape = new Square('', '', objColor);
            expect(shape.objColor).toEqual(objColor);
        })
        it('should set object color (keyword) to Square', () => {
            const objColor = 'black';
            const shape = new Square();
            expect(shape.setObjColor(objColor)).toEqual(objColor);
        })
        it('should store object\'s color (hexadecimal) into Squareobject', () => {
            const objColor = '#00FF00';
            const shape = new Square('', '', objColor);
            expect(shape.objColor).toEqual(objColor);
        })
        it('should set object color (hexadecimal) to Square', () => {
            const objColor = '#00FF00';
            const shape = new Square();
            expect(shape.setObjColor(objColor)).toEqual(objColor);
        })
    })
})