import Instance from '../../../dist/boolean/instance.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('boolean', function() {

    const value : unknown = true;

    if(Instance(value, Boolean)) {

        const result : Boolean = value;
        const boolean : boolean = value.valueOf();

    } else {

        // @ts-expect-error
        const result : Boolean  = value;

        // @ts-expect-error
        const boolean : boolean  = value.valueOf();
    }
});

it('object', function() {

    const value : unknown = {};

    if(Instance(value, Object)) {

        const result : object = value;

    } else {

        // @ts-expect-error
        const result : object = value;
    }
});

it('str.jsing', function() {

    const value : unknown = 'str.js';

    if(Instance(value, String)) {

        const result : String = value;

    } else {

        // @ts-expect-error
        const result : String = value;
    }
});


it('number', function() {

    const value : unknown = 1;

    if(Instance(value, Number)) {

        const result : Number = value;

    } else {

        // @ts-expect-error
        const result : Number = value;
    }
});

it('function', function() {

    const value : unknown = ()=>null;

    if(Instance(value, Function)) {

        const result : Function = value;

    } else {

        // @ts-expect-error
        const result : Function = value;
    }
});
