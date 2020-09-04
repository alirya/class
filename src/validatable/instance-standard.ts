import Instance from "./instance";
import StringInstance from "./string/instance";

export default function InstanceStandard<
    InstanceT extends {new(...a:unknown[]): any},
    Value = unknown
>(
    value : unknown,
    instance : InstanceT
) : Instance<Value, InstanceT, string> {

    return <Instance<Value, InstanceT, string>> new Instance(value, instance, StringInstance)
}
