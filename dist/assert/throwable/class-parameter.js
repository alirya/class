import ClassParameters from "./class-parameters";
export default function ClassParameter(
// string : unknown,
// subject : string = 'type',
// conversion : (value:unknown)=>string = value=>typeof value,
{ value, subject, conversion, }) {
    return ClassParameters(value, subject, conversion);
}
//# sourceMappingURL=class-parameter.js.map