import Class from "../../../dist/assert/string/class";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any,  string?], string>();

data.set([true, Array], 'type is constructor');
data.set([true, Set], 'type is constructor');
data.set([true, Map, 'argument'], 'argument is constructor');

data.set([false, new Set<any>()], 'type object is not constructor');
data.set([false, new Map<any, any>()], 'type object is not constructor');
data.set([false, new Array<any>(), 'argument'], 'argument object is not constructor');



let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(Class(...args)).toBe(message);

    });

    i++;
}
