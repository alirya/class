import Class from "../../class";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function InstanceParameter<Instance extends Class<object, unknown[]>>({ value, valid, instance, subject, }: Value<object> & Validatable & {
    instance: Instance;
    subject: string;
}): string;
