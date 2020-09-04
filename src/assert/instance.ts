import Guard from "../boolean/instance";
import Callback from "@dikac/t-function/assert/callback";
import InstanceError from "./throwable/instance";
import Class from "../class";

export default function Instance<Instance extends Class<object, unknown[]>>(
    value : unknown,
    instance : Instance,
    error : (value:unknown, instance:Instance)=>Error = InstanceError
) : asserts value is Instance {

    Callback(value, Guard, error, instance);
}
