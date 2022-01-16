import Instance from '../../../dist/assert/string/instance-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(Instance( [], true, Set, 'value')).toBe(
        'value is instanceof of Set.'
    );

});

it('false', ()=>{

    expect(Instance( [], false, Array, 'value')).toBe(
        'value must instanceof of Array, actual "Array".'
    );

});
