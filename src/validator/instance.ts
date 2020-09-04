import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import InstanceofValidatable from "../validatable/instance";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
import Class from "../class";


export type Interface<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
> = Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>> &
    Message<(result:Omit<Return<any, any, InstanceT>, 'message'>)=>MessageT>


export default class Instanceof<
    InstanceT extends Class<object, unknown[]> = Class<object, unknown[]>,
    MessageT = unknown
>
    implements Interface<InstanceT, MessageT>
{
    constructor(
        public instance : InstanceT,
        public message : (result:Omit<Return<any, any, InstanceT>, 'message'>)=>MessageT,
    ) {
    }

    validate<Argument extends InstanceT>(value: Argument): Replace<InstanceofValidatable<Argument, InstanceT, MessageT>, true>
    validate<Argument extends any>(value: Argument): Return<any, Argument, InstanceT, InstanceofValidatable<Argument, InstanceT, MessageT>>
    validate<Argument extends any>(value: Argument) {

        return <Return<any, Argument, InstanceT, InstanceofValidatable<Argument, InstanceT, MessageT>>> new InstanceofValidatable(value, this.instance, this.message);
    }
}
