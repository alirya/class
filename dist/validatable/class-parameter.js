import ClassParameters from "./class-parameters";
export default function ClassParameter(
// value : Argument,
// message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT,
{ value, message, }) {
    return ClassParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=class-parameter.js.map