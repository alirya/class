import Name from '@alirya/object/string/name';
import Class from '../../class';

export default function InstanceParameters<Instance extends Class<object, unknown[]>>(
    value : object,
    valid : boolean,
    instance : Instance,
    subject : string = '',
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


