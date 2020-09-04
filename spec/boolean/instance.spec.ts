import Instance from "../../dist/boolean/instance";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatible", function() {

    describe("boolean", function() {

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

    describe("object", function() {

        let value : unknown = {};

        if(Instance(value, Object)) {

            let result : object = value;

        } else {

            // @ts-expect-error
            let result : object = value;
        }
    });

    describe("string", function() {

        let value : unknown = 'str';

        if(Instance(value, String)) {

            let result : String = value;

        } else {

            // @ts-expect-error
            let result : String = value;
        }
    });


    describe("number", function() {

        let value : unknown = 1;

        if(Instance(value, Number)) {

            let result : Number = value;

        } else {

            // @ts-expect-error
            let result : Number = value;
        }
    });

    describe("function", function() {

        let value : unknown = ()=>null;

        if(Instance(value, Function)) {

            let result : Function = value;

        } else {

            // @ts-expect-error
            let result : Function = value;
        }
    });

});

describe("boolean", function() {

    it(`true`, () => {
        expect(Instance(new Boolean(true), Boolean)).toBeTrue();
    });

    it(`false`, () => {
        expect(Instance(new Boolean(false), Boolean)).toBeTrue();
    });

});

describe("string", function() {

    it(`primitive`, () => {
        expect(Instance(new String('str'), String)).toBeTrue();
    });

    it(`object`, () => {
        expect(Instance('str', String)).toBeFalse();
    });

});


describe("number", function() {

    it(`primitive`, () => {
        expect(Instance(new Number(1), Number)).toBeTrue();
    });

    it(`nan`, () => {
        expect(Instance(NaN, Number)).toBeFalse();
    });

});

describe("object", function() {

    it(`plain`, () => {
        expect(Instance({}, Object)).toBeTrue();
    });

    it(`instance`, () => {
        expect(Instance(new Map(), Object)).toBeTrue();
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        expect(Instance(function () {}, Function)).toBeTrue();
    });

    it(`anonymous arrow`, () => {
        expect(Instance(()=>{}, Function)).toBeTrue();
    });

    it(`named`, () => {
        expect(Instance(isNaN, Function)).toBeTrue();
    });

});

describe("empty", function() {

    it(`null `, () => {
        expect(Instance(null, Object)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(Instance(undefined, Object)).toBeFalse();
    });

});
