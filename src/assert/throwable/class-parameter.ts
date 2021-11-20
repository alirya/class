import ClassType from "../string/class-parameters";
import Value from "@dikac/t-value/value";
import ClassParameters from "./class-parameters";

export default function ClassParameter(
    // string : unknown,
    // subject : string = 'type',
    // conversion : (value:unknown)=>string = value=>typeof value,
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
