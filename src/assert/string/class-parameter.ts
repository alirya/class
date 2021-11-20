import ClassParameters from "./class-parameters";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

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
