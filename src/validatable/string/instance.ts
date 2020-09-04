import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import InstanceString from "../../assert/string/instance";
import ClassInterface from "../../class/class";

export default function Instance(
    object : Readonly<Value<object> & ClassInterface & Validatable>
) : string {

    return InstanceString(object.valid, object.value, object.class);
}
