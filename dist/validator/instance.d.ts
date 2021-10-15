import Validator from "@dikac/t-validator/simple";
import InstanceofValidatable from "../validatable/instance";
import Return from "@dikac/t-validator/validatable/simple";
import Class from "../class";
export default function Instanceof<InstanceT extends Class<object, unknown[]>, MessageT = unknown>(instance: InstanceT, message: (result: Omit<Return<any, any, InstanceT>, 'message'>) => MessageT): Validator<any, InstanceT, InstanceofValidatable<any, InstanceT, MessageT>>;
