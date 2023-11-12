const Shapes = require('./shapes.js');

describe('Shape class', () => {
    describe('object creation', () => {
        it('should instantiate class object', () => {
            const shape = new Shapes();
            expect(shape).toBeInstanceOf(Shapes);
        })
    })
    describe('object text instantiated', () => {
        it('should instantiate object\'s text', () => {
            const text = 'SVG';
            const shape = new Shapes(text);
            expect(shape.text).toEqual(text);
        })
        it('should set object\'s text', () => {
            const text = 'SVG';
            const shape = new Shapes();
            expect(shape.setText(text)).toEqual(text);
        })
    })
    describe('object text color', () => {
        it('should store text color (color keyword) into object', () => {
            const color = 'green';
            const shape = new Shapes('', color);
            expect(shape.color).toEqual(color);
        })
        it('should set text color (keyword)', () => {
            const color = 'green';
            const shape = new Shapes();
            expect(shape.setColor(color)).toEqual(color);
        })
        it('should store text color (hexadecimal) into object', () => {
            const color = '#FFFFFF';
            const shape = new Shapes('', color);
            expect(shape.color).toEqual(color);
        })
        it('should set text color (hexadecimal)', () => {
            const color = '#FF0000';
            const shape = new Shapes();
            expect(shape.setColor(color)).toEqual(color);
        })
    })
    describe('object\'s color', () => {
        it('should store object\'s color (color keyword) into object', () => {
            const objColor = 'black';
            const shape = new Shapes('', '', objColor);
            expect(shape.objColor).toEqual(objColor);
        })
        it('should set object color (keyword)', () => {
            const objColor = 'black';
            const shape = new Shapes();
            expect(shape.setObjColor(objColor)).toEqual(objColor);
        })
        it('should store object\'s color (hexadecimal) into object', () => {
            const objColor = '#00FF00';
            const shape = new Shapes('', '', objColor);
            expect(shape.objColor).toEqual(objColor);
        })
        it('should set object color (hexadecimal)', () => {
            const objColor = '#00FF00';
            const shape = new Shapes();
            expect(shape.setObjColor(objColor)).toEqual(objColor);
        })
    })
})