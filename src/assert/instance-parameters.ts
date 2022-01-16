import Guard from "../boolean/instance";
import Callback from "@alirya/function/assert/callback-parameters";
import InstanceError from "./throwable/instance-parameters";
import Class from "../class";

export default function InstanceParameters<Instance extends Class<object, unknown[]>>(
    value : unknown,
    instance : Instance,
    error : (value:unknown, instance:Instance)=>Error = InstanceError,
) : asserts value is Instance {

    Callback(value, Guard, error, instance);
}
