import InstanceString from '../string/instance.js';
import Class from '../../class.js';
import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';


export function InstanceParameters<Instance extends Class<object, unknown[]>>(
    value : object,
    instance : Instance,
    message : (value:unknown, valid:boolean, instance:Instance)=>string = InstanceString.Parameters,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(value, false, instance));
}


export function InstanceParameter<Instance extends Class<object, unknown[]>>(
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


namespace Instance {
    export const Parameters = InstanceParameters;
    export const Parameter = InstanceParameter;
}
export default Instance;
