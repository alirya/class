import Value from "@dikac/t-value/value";
import BooleanInstance from "../../boolean/instance";
import Class from "../../class/class";

export default function Instance<
    Instance extends {new(...a:unknown[]): any}
>(
    value : Value<unknown> & Class<Instance>
) : boolean {

    return BooleanInstance(value.value, value.class);
}
