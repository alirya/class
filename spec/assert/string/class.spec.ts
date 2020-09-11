import Class from "../../../dist/assert/string/class";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(Class(true, {}, 'value')).toBe(
        'value is constructor.'
    );

});

it('false', ()=>{

    expect(Class(false, {}, 'value')).toBe(
        'value must constructor, actual object.'
    );

});
