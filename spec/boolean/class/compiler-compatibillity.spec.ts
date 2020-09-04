import Class from "../../../dist/boolean/class";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('basic', ()=>{

    let value : unknown = 1;

    if(Class(value)) {

        value.name;

    } else {

        // @ts-expect-error
        value.name;
    }


})
