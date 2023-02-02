import Class from '../class';
import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import {ReadonlyWrapperType, ReadonlyWrapperParameters} from '@alirya/validator/validatable/readonly-wrapper';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import InstanceBoolean from '../value/boolean/instance';
import ClassInterface from '../class/class';
import Dynamic from '@alirya/validator/value/validatable';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';


export interface InstanceContext<
    // ValueT,
    InstanceT extends Class<object, unknown[]>,
    // MessageT
> /*extends ReadonlyWrapperType<Value<ValueT>, Message<MessageT>, Validatable>*/ {
    readonly class : InstanceT;
}

export class InstanceParameter<ValueT, InstanceT extends Class<object, unknown[]>, MessageT>
    extends ReadonlyWrapperParameters<Value<ValueT>, Message<MessageT>, Validatable>
    implements ValidatorValidatable<ValueT, MessageT>, InstanceContext</*ValueT, */InstanceT/*, MessageT*/>
{
    readonly class : InstanceT;

    constructor(
            argument : Value<ValueT> &
            Message<ValidatableParameter<ValueT, MessageT, Dynamic<ValueT> & ClassInterface<InstanceT>>> &
            ClassInterface<InstanceT>
    ) {

        let msg = CallbackParameters(argument, InstanceBoolean, ()=>argument.message(this));

        super(argument, msg, msg);

        this.class = argument.class;
    }
}

export class InstanceParameters<ValueT, InstanceT extends Class<object, unknown[]>, MessageT>
    extends InstanceParameter<ValueT, InstanceT, MessageT>
{

    constructor(
        value : ValueT,
        class_ : InstanceT,
        message : ValidatableParameters<ValueT, MessageT, [InstanceT]>,
    ) {

        super({
            value,
            message: (argument)=>message(argument.value, argument.valid, argument.class),
            class:class_
        });
    }
}

namespace Instance {
    export const Parameters = InstanceParameters;
    export const Parameter = InstanceParameter;
    export type Context<
        // ValueT,
        InstanceT extends Class<object, unknown[]>,
        // MessageT
    > = InstanceContext<
        // ValueT,
        InstanceT
        // MessageT
    >;
}
export default Instance;
