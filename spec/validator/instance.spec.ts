// import Instance from "../../dist/validator/instance";
// import InstanceString from "../../dist/validatable/string/instance";
//
// it("enable console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe(`compiler compatible`,function() {
//
//     describe(`native`,function() {
//
//         describe('explicit', ()=>{
//
//             let validator = Instance(String, InstanceString);
//             let validatable = validator('ab');
//
//             if(validatable.valid) {
//
//                 let string : StringConstructor = validatable.value;
//
//             } else {
//
//                 // @ts-expect-error
//                 let string : StringConstructor = validatable.value;
//             }
//
//         });
//
//         describe('implicit', ()=>{
//
//             let validator = Instance(String, InstanceString);
//             let validatable = validator('ab');
//
//             if(validatable.valid) {
//
//                 let string : StringConstructor = validatable.value;
//
//             } else {
//
//                 // @ts-expect-error
//                 let string : StringConstructor = validatable.value;
//             }
//
//         });
//     });
//
//     describe(`custom`,function() {
//
//         class Test {
//             constructor(data) {
//             }
//             data () {}
//         }
//
//         describe('explicit', ()=>{
//
//             let validator = Instance<{new(data):Test}>(Test, InstanceString);
//             let validatable = validator('ab');
//
//             if(validatable.valid) {
//
//                 let string : {new(data):Test}  = validatable.value;
//                 // @ts-expect-error
//                 let instance : Test = validatable.value;
//
//             } else {
//
//                 // @ts-expect-error
//                 let string : {new(data):Test}  = validatable.value;
//                 // @ts-expect-error
//                 let instance : Test = validatable.value;
//             }
//
//         });
//
//         describe('implicit', ()=>{
//
//             let validator = Instance(Test, InstanceString);
//             let validatable = validator('ab');
//
//             if(validatable.valid) {
//
//                 // @ts-expect-error
//                 let instance : Test = validatable.value;
//                 let test : {new(data):Test}  = validatable.value;
//
//             } else {
//
//                 // @ts-expect-error
//                 let instance : Test = validatable.value;
//                 // @ts-expect-error
//                 let test : {new(data):Test} = validatable.value;
//             }
//
//         });
//     });
//
// });
//
// describe(`validate`,function() {
//
//     describe('native', ()=>{
//
//         let validator = Instance<StringConstructor>(String, InstanceString);
//
//         it('valid', ()=>{
//
//             let validatable = validator(new String);
//
//             expect(validatable.valid).toBe(true);
//             expect(validatable.class).toBe(String);
//             expect(validatable.value).toBeInstanceOf(String);
//         });
//
//         it('invalid', ()=>{
//
//             let validatable = validator(2);
//
//             expect(validatable.valid).toBe(false);
//             expect(validatable.class).toBe(String);
//             expect(validatable.value).toBe(2);
//         });
//     });
//
//     describe('custom', ()=>{
//
//         class Test {
//             constructor(data) {
//             }
//         }
//
//         let validator = Instance<typeof Test>(Test, InstanceString);
//
//         it('valid', ()=>{
//
//             let validatable = validator(new Test('data'));
//
//             expect(validatable.valid).toBe(true);
//             expect(validatable.class).toBe(Test);
//             expect(validatable.value).toEqual(new Test('data'));
//             expect(validatable.value).toBeInstanceOf(Test);
//         });
//
//         it('invalid', ()=>{
//
//             let validatable = validator(1);
//
//             expect(validatable.valid).toBe(false);
//             expect(validatable.class).toBe(Test);
//             expect(validatable.value).toBe(1);
//         });
//     });
//
// });
