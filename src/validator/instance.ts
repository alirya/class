import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import InstanceofValidatable from "../validatable/instance";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
import Class from "../class";

export default function Instanceof<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    instance : InstanceT,
    message : (result:Omit<Return<any, any, InstanceT>, 'message'>)=>MessageT,
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>> {

    return function<Type extends InstanceT, Argument extends any>(value: Type|Argument) {

        return <Return<any, Argument, InstanceT, InstanceofValidatable<Argument, InstanceT, MessageT>>> new InstanceofValidatable(value, instance, message);

    } as Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>
}
