var calc = require("../app/calculator");
var chai = require("chai");


describe('Testing calculator', () =>{
    describe('add function', () => {
        it('should return 8 when adding 4 and 4', () => {
            chai.expect(calc.add(4,4)).to.equal(8);
        })
        it('should fail when adding 4 and 4', ()=>{
            chai.expect(calc.add(4,4)).to.equal(7);
        })
    });

    describe('mul function', () => {
       it('should return 6 when multiply 2 and 3', () =>{
          chai.expect(calc.mul(2,3)).to.equal(6);
       });
        it('should fail when multiply 2 and 3', () =>{
            chai.expect(calc.mul(2,3)).to.equal(8);
        });
    });

    describe('div function', () => {
        it('should return 3 when divide 9 by 3', () =>{
            chai.expect(calc.div(9,3)).to.equal(3);
        });
        it('should fail when when divide 9 by 3', () =>{
            chai.expect(calc.div(9,3)).to.equal(4);
        });
    });

    describe('sub function', () => {
        it('should return 5 when subtract 5 from 10', () =>{
            chai.expect(calc.sub(10,5)).to.equal(5);
        });
        it('should fail when subtract 5 from 10', () =>{
            chai.expect(calc.sub(10,5)).to.equal(7);
        });
    });

});