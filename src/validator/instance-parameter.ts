import Validator from '@alirya/validator/simple';
import Message from '@alirya/message/message';
import InstanceofValidatable from '../validatable/instance-parameters';
import Class from '../class';
import ClassContainer from '../class/class';
import DynamicParameter from '@alirya/validator/message/function/validatable-parameter';
import InstanceParameters from './instance-parameters';

export type InstanceArgument<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
> = ClassContainer<InstanceT> & Message<DynamicParameter<InstanceT, MessageT>>;

export default function InstanceParameter<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    argument : InstanceArgument<InstanceT, MessageT>
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>;

export default function InstanceParameter<
    InstanceT extends Class<object, unknown[]>,
    MessageT = unknown
>(
    argument :  InstanceArgument<InstanceT, MessageT>
) : Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>> {

    return InstanceParameters(
        argument.class,
        (value, valid) => argument.message({value, valid})
    );
}
