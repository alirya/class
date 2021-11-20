import InstanceParameters from "./instance-parameters";
export default function InstanceParameter(
// value : object,
// instance : Instance,
// message : (value:unknown, valid:boolean, instance:Instance)=>string = InstanceString,
// error : (message:string)=>Error = (v)=>new Error(v),
{ value, instance, message, error, }) {
    return InstanceParameters(value, instance, message, error);
}
//# sourceMappingURL=instance-parameter.js.map