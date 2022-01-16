import ClassParameters from './class-parameters';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';

export default function ClassParameter(
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
