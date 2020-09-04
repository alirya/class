import Class from "../../../dist/boolean/class";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


class Test {
    method () {}
}

it('native class', ()=>{
    expect(Class(Array)).toBe(true);
})

it('custom class', ()=>{

    expect(Class(Test)).toBe(true);
})


it('anonymous function', ()=>{
    expect(Class(function(){})).toBe(true);
})

it('function', ()=>{
    expect(Class(Function)).toBe(true);
})

it('new function', ()=>{
    expect(Class(new Function)).toBe(true);
})


it('undefined', ()=>{
    expect(Class(undefined)).toBe(false);
})

it('null', ()=>{
    expect(Class(null)).toBe(false);
})

it('number', ()=>{
    expect(Class(1)).toBe(false);
})

it('object', ()=>{
    expect(Class({})).toBe(false);
})

it('custom', ()=>{
    expect(Class(new Test)).toBe(false);
})

it('arrow function', ()=>{
    expect(Class(()=>{})).toBe(false);
})

it('class prototype', ()=>{
    expect(Class(Array.prototype)).toBe(false);
})

it('function prototype', ()=>{
    expect(Class(Function.prototype)).toBe(false);
})

it('method', ()=>{
    expect(Class((new Test).method)).toBe(false);
})

