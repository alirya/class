import ClassType from "../string/class";

export default function Class(
    string : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : Error {

    return new Error(ClassType(false, string, subject, conversion))
}
