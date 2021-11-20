import Guard from "../boolean/instance";
import Callback from "@dikac/t-function/assert/callback-parameters";
import InstanceError from "./throwable/instance-parameters";
import Class from "../class";
import Value from "@dikac/t-value/value";
import InstanceParameters from "./instance-parameters";

export default function InstanceParameter<Instance extends Class<object, unknown[]>>(
    value : unknown,
    //instance : Instance,
    //error : (value:unknown, instance:Instance)=>Error = InstanceError,
    {
        // value,
        instance,
        error,
    } : Value & {
        instance : Instance,
        error : (argument: Value & { instance: Instance })=>Error
    }
) : asserts value is Instance {

    InstanceParameters(value, instance, error);
}
