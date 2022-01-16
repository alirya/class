import Instance from '../../../dist/boolean/instance';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('boolean', function() {

    let value : unknown = true;

    if(Instance(value, Boolean)) {

        let result : Boolean = value;
        let boolean : boolean = value.valueOf();

    } else {

        // @ts-expecerror
        let result : Boolean  = value;

        // @ts-expecerror
        let boolean : boolean  = value.valueOf();
    }
});

describe('object', function() {

    let value : unknown = {};

    if(Instance(value, Object)) {

        let result : object = value;

    } else {

        // @ts-expecerror
        let result : object = value;
    }
});

describe('string', function() {

    let value : unknown = 'str';

    if(Instance(value, String)) {

        let result : String = value;

    } else {

        // @ts-expecerror
        let result : String = value;
    }
});


describe('number', function() {

    let value : unknown = 1;

    if(Instance(value, Number)) {

        let result : Number = value;

    } else {

        // @ts-expecerror
        let result : Number = value;
    }
});

describe('function', function() {

    let value : unknown = ()=>null;

    if(Instance(value, Function)) {

        let result : Function = value;

    } else {

        // @ts-expecerror
        let result : Function = value;
    }
});
