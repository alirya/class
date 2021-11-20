import InstanceString from "../string/instance-parameters";
import Class from "../../class";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";


export default function InstanceParameters<Instance extends Class<object, unknown[]>>(
    value : object,
    instance : Instance,
    message : (value:unknown, valid:boolean, instance:Instance)=>string = InstanceString,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(value, false, instance));
}
