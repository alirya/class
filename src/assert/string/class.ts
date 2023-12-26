import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';

export function ClassParameters(
    value : unknown,
    valid : boolean,
    subject  = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('constructor');

    if(!valid) {

        strings[2] = `${strings[2]},`;

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}


export function ClassParameter(
    {
        value,
        valid,
        subject,
        conversion,
    } : Value<unknown> & Validatable & {
        subject ?: string,
        conversion ?: (value:unknown)=>string
    }
) : string {

    return ClassParameters(value, valid, subject, conversion);
}


namespace Class {
    export const Parameters = ClassParameters;
    export const Parameter = ClassParameter;
}
export default Class;
