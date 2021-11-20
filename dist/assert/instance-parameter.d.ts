import Class from "../class";
import Value from "@dikac/t-value/value";
export default function InstanceParameter<Instance extends Class<object, unknown[]>>(value: unknown, { instance, error, }: Value & {
    instance: Instance;
    error: (argument: Value & {
        instance: Instance;
    }) => Error;
}): asserts value is Instance;
