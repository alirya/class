import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import MergeWrapper from '@alirya/validator/validatable/readonly-wrapper-parameters';
import MessageCallback from '@alirya/validator/validatable/callback-function-parameters';
import InstanceBoolean from '../value/boolean/instance';
import ClassInterface from '../class/class';
import Class from '../class';
import DynamicParameter from '@alirya/validator/message/function/validatable-parameter';
import Dynamic from '@alirya/validator/value/validatable';

export default class InstanceParameter<ValueT, InstanceT extends Class<object, unknown[]>, MessageT>
    extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable>
{
    readonly class : InstanceT;

    constructor(
            argument : Value<ValueT> &
            Message<DynamicParameter<ValueT, MessageT, Dynamic<ValueT> & ClassInterface<InstanceT>>> &
            ClassInterface<InstanceT>
    ) {

        let msg = MessageCallback(argument, InstanceBoolean, ()=>argument.message(this));

        super(argument, msg, msg);

        this.class = argument.class;
    }
}
