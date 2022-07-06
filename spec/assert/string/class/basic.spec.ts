import Class from '../../../../dist/assert/string/class.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(Class.Parameters( {}, true, 'value')).toBe(
        'value is constructor.'
    );

});

it('false', ()=>{

    expect(Class.Parameters( {}, false, 'value')).toBe(
        'value must constructor, actual object.'
    );

});
