import Value from "@dikac/t-value/value";
import BooleanInstance from "../../boolean/instance";
import ClassContainer from "../../class/class";
import Class from "../../class";

export default function Instance<
    Instance extends Class<object, unknown[]>
>(
    value : Value<unknown> & ClassContainer<Instance>
) : boolean {

    return BooleanInstance(value.value, value.class);
}
