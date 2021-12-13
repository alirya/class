import Class from "../../class";
import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import InstanceParameters from "./instance-parameters";

export default function InstanceParameter<Instance extends Class<object, unknown[]>>(
    {
        value,
        instance,
        message,
        error,
    } : Value<object> & Message<(value:unknown, valid:boolean, instance:Instance)=>string> & {
        instance : Instance,
        error : (message:string)=>Error
    }
) : Error {

    return InstanceParameters(value, instance, message, error);
}
