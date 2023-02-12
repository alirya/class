import Instance from '../../../dist/boolean/instance.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('boolean', function() {

    it(`true`, () => {
        expect(Instance(new Boolean(true), Boolean)).toBeTrue();
    });

    it(`false`, () => {
        expect(Instance(new Boolean(false), Boolean)).toBeTrue();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(Instance(new String('str'), String)).toBeTrue();
    });

    it(`object`, () => {
        expect(Instance('str', String)).toBeFalse();
    });

});


describe('number', function() {

    it(`primitive`, () => {
        expect(Instance(new Number(1), Number)).toBeTrue();
    });

    it(`nan`, () => {
        expect(Instance(NaN, Number)).toBeFalse();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(Instance({}, Object)).toBeTrue();
    });

    it(`instance`, () => {
        expect(Instance(new Map(), Object)).toBeTrue();
    });

});

describe('function', function() {

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

describe('empty', function() {

    it(`null `, () => {
        expect(Instance(null, Object)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(Instance(undefined, Object)).toBeFalse();
    });

});
