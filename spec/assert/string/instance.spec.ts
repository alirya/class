import Instance from "../../../dist/assert/string/instance";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, object, {new(...a:unknown[]): any},  string?], string>();

data.set([true, [], Array], 'Array is instanceof of Array');
data.set([true, new Set(), Set], 'Set is instanceof of Set');
data.set([true, new Map, Map, 'argument'], 'argument Map is instanceof of Map');

data.set([false, [], Set], 'Array is not instanceof of Set');
data.set([false, new Set(), Map], 'Set is not instanceof of Map');
data.set([false, {}, Array, 'argument'], 'argument Object is not instanceof of Array');



let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(Instance(...args)).toBe(message);

    });

    i++;
}
