import Instance from '../../../dist/boolean/instance.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('boolean', function() {

    let value : unknown = true;

    if(Instance(value, Boolean)) {

        let result : Boolean = value;
        let boolean : boolean = value.valueOf();

    } else {

        // @ts-expect-error
        let result : Boolean  = value;

        // @ts-expect-error
        let boolean : boolean  = value.valueOf();
    }
});

it('object', function() {

    let value : unknown = {};

    if(Instance(value, Object)) {

        let result : object = value;

    } else {

        // @ts-expect-error
        let result : object = value;
    }
});

it('string', function() {

    let value : unknown = 'str';

    if(Instance(value, String)) {

        let result : String = value;

    } else {

        // @ts-expect-error
        let result : String = value;
    }
});


it('number', function() {

    let value : unknown = 1;

    if(Instance(value, Number)) {

        let result : Number = value;

    } else {

        // @ts-expect-error
        let result : Number = value;
    }
});

it('function', function() {

    let value : unknown = ()=>null;

    if(Instance(value, Function)) {

        let result : Function = value;

    } else {

        // @ts-expect-error
        let result : Function = value;
    }
});
