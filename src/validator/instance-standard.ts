import Instance from "./instance";
import StringInstance from "../validatable/string/instance";
import Class from "../class";
import Validator from "@dikac/t-validator/simple";
import InstanceofValidatable from "../validatable/instance";

export default function InstanceStandard<
    InstanceT extends Class<object, unknown[]>
>(
    instance : InstanceT
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, string>>  {

    return  Instance(instance, StringInstance)
}
