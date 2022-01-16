import ClassType from '../string/class-parameters';

export default function ClassParameters(
    string : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : Error {

    return new Error(ClassType(string, false, subject, conversion));
}
