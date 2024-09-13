// Destructuring the shape constructor object
const {Circle, Triangle, Square} = require('../lib/shapes');


// testing the square
describe('Square', () => {

    it('Should render a square', () => {

        const shape = new Square();

        shape.setColor("red");

        expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="red"/>');
    });
});

//testing the circle
describe('Circle', () => {

    it('Should render a circle', () => {

        const shape = new Circle();

        shape.setColor("green");

        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
    });
});



// testing the triangle

describe ('Triangle', () => {

    it('Should render a triangle ', () => {

        const shape = new Triangle();

        shape.setColor("blue");
        
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
});