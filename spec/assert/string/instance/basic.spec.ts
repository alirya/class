import Instance from '../../../../dist/assert/string/instance';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(Instance.Parameters( [], true, Set, 'value')).toBe(
        'value is instanceof of Set.'
    );

});

it('false', ()=>{

    expect(Instance.Parameters( [], false, Array, 'value')).toBe(
        'value must instanceof of Array, actual "Array".'
    );

});
