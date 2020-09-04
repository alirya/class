import Instance from "../../dist/validator/instance";
import InstanceString from "../../dist/validatable/string/instance";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    describe(`native`,function() {

        describe('explicit', ()=>{

            let validator = new Instance(String, InstanceString);
            let validatable = validator.validate('ab');

            if(validatable.valid) {

                let type : StringConstructor = validator.instance;
                let string : StringConstructor = validatable.value;

            } else {

                // @ts-expect-error
                let string : StringConstructor = validatable.value;
                let type : StringConstructor = validator.instance;
            }

        });

        describe('implicit', ()=>{

            let validator = new Instance(String, InstanceString);
            let validatable = validator.validate('ab');

            if(validatable.valid) {

                let type : StringConstructor = validator.instance;
                let string : StringConstructor = validatable.value;

            } else {

                // @ts-expect-error
                let string : StringConstructor = validatable.value;
                let type : StringConstructor = validator.instance;
            }

        });
    });

    describe(`custom`,function() {

        class Test {
            constructor(data) {
            }
            data () {}
        }

        describe('explicit', ()=>{

            let validator = new Instance<{new(data):Test}>(Test, InstanceString);
            let validatable = validator.validate('ab');

            if(validatable.valid) {

                let type : {new(data):Test} = validator.instance;
                let string : {new(data):Test}  = validatable.value;
                // @ts-expect-error
                let instance : Test = validatable.value;

            } else {

                let type : {new(data):Test} = validator.instance;
                // @ts-expect-error
                let string : {new(data):Test}  = validatable.value;
                // @ts-expect-error
                let instance : Test = validatable.value;
            }

        });

        describe('implicit', ()=>{

            let validator = new Instance(Test, InstanceString);
            let validatable = validator.validate('ab');

            if(validatable.valid) {

                let type : {new(data):Test} = validator.instance;
                // @ts-expect-error
                let instance : Test = validatable.value;
                let test : {new(data):Test}  = validatable.value;

            } else {

                let type : {new(data):Test} = validator.instance;

                // @ts-expect-error
                let instance : Test = validatable.value;
                // @ts-expect-error
                let test : {new(data):Test} = validatable.value;
            }

        });
    });

});

describe(`validate`,function() {

    describe('native', ()=>{

        let validator = new Instance<StringConstructor>(String, InstanceString);

        it('valid', ()=>{

            let validatable = validator.validate(new String);

            expect(validator.instance).toBe(String);

            expect(validatable.valid).toBe(true);
            expect(validatable.class).toBe(String);
            expect(validatable.value).toBeInstanceOf(String);
        });

        it('invalid', ()=>{

            let validatable = validator.validate(2);

            expect(validator.instance).toBe(String);

            expect(validatable.valid).toBe(false);
            expect(validatable.class).toBe(String);
            expect(validatable.value).toBe(2);
        });
    });

    describe('custom', ()=>{

        class Test {
            constructor(data) {
            }
        }

        let validator = new Instance<typeof Test>(Test, InstanceString);

        it('valid', ()=>{

            let validatable = validator.validate(new Test('data'));

            expect(validator.instance).toBe(Test);
            expect(validatable.valid).toBe(true);
            expect(validatable.class).toBe(Test);
            expect(validatable.value).toEqual(new Test('data'));
            expect(validatable.value).toBeInstanceOf(Test);
        });

        it('invalid', ()=>{

            let validatable = validator.validate(1);

            expect(validator.instance).toBe(Test);
            expect(validatable.valid).toBe(false);
            expect(validatable.class).toBe(Test);
            expect(validatable.value).toBe(1);
        });
    });

});
