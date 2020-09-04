import InstanceString from "../string/instance";

export default function Instance<Instance extends {new(...a:unknown[]): any}>(
    value : object,
    instance : Instance,
    message : (valid:boolean, value:unknown, instance:Instance)=>string = InstanceString,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(false, value, instance));
}
