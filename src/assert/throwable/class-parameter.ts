import Value from "@alirya/value/value";
import ClassParameters from "./class-parameters";

export default function ClassParameter(
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
