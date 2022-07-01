import {InstanceParameters} from '../assert/instance';
import StringError from '../assert/throwable/instance';
import Class from '../class';

export default function Instance<Instance extends Class<object, unknown[]>>(
    value : unknown,
    instance : Instance,
    error : (value:unknown, instance : Instance)=>Error = StringError.Parameters
) : Instance {

    InstanceParameters(value, instance, error);

    return value;
}
