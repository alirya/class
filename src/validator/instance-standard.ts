import Instance, {Interface} from "./instance";
import StringInstance from "../validatable/string/instance";

export default function InstanceStandard<
    InstanceT extends {new(...a:unknown[]): any}
>(
    instance : InstanceT
) : Interface<InstanceT, string> {

    return <Interface<InstanceT, string>> new Instance(instance, StringInstance)
}
