import Callback from '@alirya/validator/validatable/callback-function-parameters';
import ClassGuard from '../boolean/class';
import Return from '@alirya/validator/validatable/simple';
import Instance from '@alirya/validator/validatable/validatable';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export default function ClassParameters<MessageT, Argument>(
    value : Argument,
    message : Dynamic<Argument, MessageT>,
) : Return<Argument, string, Readonly<Instance<unknown, MessageT>>> {

    return <Return<Argument, string, Readonly<Instance<unknown, MessageT>>>> Callback(value, ClassGuard, message);
}
