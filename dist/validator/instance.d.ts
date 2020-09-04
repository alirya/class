import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import InstanceofValidatable from "../validatable/instance";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
export declare type Interface<InstanceT extends {
    new (...a: unknown[]): any;
}, MessageT = unknown> = Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>> & Message<(result: Omit<Return<any, any, InstanceT>, 'message'>) => MessageT>;
export default class Instanceof<InstanceT extends {
    new (...a: unknown[]): any;
} = {
    new (...a: unknown[]): any;
}, MessageT = unknown> implements Interface<InstanceT, MessageT> {
    instance: InstanceT;
    message: (result: Omit<Return<any, any, InstanceT>, 'message'>) => MessageT;
    constructor(instance: InstanceT, message: (result: Omit<Return<any, any, InstanceT>, 'message'>) => MessageT);
    validate<Argument extends InstanceT>(value: Argument): Replace<InstanceofValidatable<Argument, InstanceT, MessageT>, true>;
    validate<Argument extends any>(value: Argument): Return<any, Argument, InstanceT, InstanceofValidatable<Argument, InstanceT, MessageT>>;
}
