import ClassType from '../string/class.js';
import Value from '@alirya/value/value.js';

export function ClassParameters(
    string : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : Error {

    return new Error(ClassType.Parameters(string, false, subject, conversion));
}


export function ClassParameter(
    {
        value,
        subject,
        conversion,
    } : Value & {
        subject : string,
        conversion : (value:unknown)=>string
    }
) : Error {

    return ClassParameters(value, subject, conversion);
}


namespace Class {
    export const Parameters = ClassParameters;
    export const Parameter = ClassParameter;
}
export default Class;
