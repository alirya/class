import InstanceString from "../string/instance";
import Class from "../../class";

export default function Instance<Instance extends Class<object, unknown[]>>(
    value : object,
    instance : Instance,
    message : (valid:boolean, value:unknown, instance:Instance)=>string = InstanceString,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(false, value, instance));
}
