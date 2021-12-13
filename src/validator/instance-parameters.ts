import Validator from "@dikac/t-validator/simple";
import InstanceofValidatable from "../validatable/instance-parameters";
import Return from "@dikac/t-validator/validatable/simple";
import Class from "../class";
import DynamicParameters from "@dikac/t-validator/message/function/dynamic-parameters";
import StringInstance from "../assert/string/instance-parameters";

export default function InstanceParameters<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
    >(
    instance : InstanceT,
    message : DynamicParameters<InstanceT, MessageT, [InstanceT]>,
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>;

export default function InstanceParameters<
    InstanceT extends Class<object, unknown[]>,
    >(
    instance : InstanceT,
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, string>>;

export default function InstanceParameters<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    instance : InstanceT,
    message : DynamicParameters<InstanceT, MessageT|string, [InstanceT]> = StringInstance,
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT|string>> {

    return function<Type extends InstanceT, Argument extends any>(value: Type|Argument) {

        return <Return<any, Argument, InstanceT, InstanceofValidatable<Argument, InstanceT, MessageT>>> new InstanceofValidatable(value, instance, message);

    } as Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>
}
