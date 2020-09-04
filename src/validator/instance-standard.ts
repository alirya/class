import Instance, {Interface} from "./instance";
import StringInstance from "../validatable/string/instance";
import Class from "../class";

export default function InstanceStandard<
    InstanceT extends Class<object, unknown[]>
>(
    instance : InstanceT
) : Interface<InstanceT, string> {

    return <Interface<InstanceT, string>> new Instance(instance, StringInstance)
}
