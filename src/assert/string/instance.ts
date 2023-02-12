import Name from '@alirya/object/string/name.js';
import Class from '../../class.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';

export function InstanceParameters<Instance extends Class<object, unknown[]>>(
    value : object,
    valid : boolean,
    instance : Instance,
    subject  = '',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('instanceof of', instance.name);

    if(!valid) {

        strings[3] = `${strings[3]},`;

        strings.push('actual', `"${Name(value)}"`);
    }

    return strings.join(' ') + '.';
}




export function InstanceParameter<Instance extends Class<object, unknown[]>>(
    {
        value,
        valid,
        instance,
        subject,
    } : Value<object> & Validatable & {
        instance : Instance,
        subject ?: string
    }
) : string {

    return InstanceParameters(value, valid, instance, subject);

}




namespace Instance {
    export const Parameters = InstanceParameters;
    export const Parameter = InstanceParameter;
}
export default Instance;
