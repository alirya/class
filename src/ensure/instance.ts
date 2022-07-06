import {InstanceParameters} from '../assert/instance.js';
import StringError from '../assert/throwable/instance.js';
import Class from '../class.js';

export default function Instance<Instance extends Class<object, unknown[]>>(
    value : unknown,
    instance : Instance,
    error : (value:unknown, instance : Instance)=>Error = StringError.Parameters
) : Instance {

    InstanceParameters(value, instance, error);

    return value;
}
