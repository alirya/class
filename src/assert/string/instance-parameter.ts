import Class from '../../class';
import InstanceParameters from './instance-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export default function InstanceParameter<Instance extends Class<object, unknown[]>>(
    {
        value,
        valid,
        instance,
        subject,
    } : Value<object> & Validatable & {
        instance : Instance,
        subject : string
    }
) : string {

    return InstanceParameters(value, valid, instance, subject);

}


