import Class from "../class";
export default function Instance<Instance extends Class<object, unknown[]>>(value: unknown, instance: Instance, error?: (value: unknown, instance: Instance) => Error): asserts value is Instance;
