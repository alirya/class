import Guard from '../boolean/instance';
import {CallbackParameters} from '@alirya/function/assert/callback';
import InstanceError from './throwable/instance';
import Class from '../class';
import Value from '@alirya/value/value';

export function InstanceParameters<Instance extends Class<object, unknown[]>>(
    value : unknown,
    instance : Instance,
    error : (value:unknown, instance:Instance)=>Error = InstanceError.Parameters,
) : asserts value is Instance {

    CallbackParameters(value, Guard, error, instance);
}


export function InstanceParameter<Instance extends Class<object, unknown[]>>(
    value : unknown,
    {
        instance,
        error,
    } : Value & {
        instance : Instance,
        error : (argument: Value & { instance: Instance })=>Error
    }
) : asserts value is Instance {

    InstanceParameters(value, instance, error);
}


namespace Instance {
    export const Parameters = InstanceParameters;
    export const Parameter = InstanceParameter;
}
export default Instance;
