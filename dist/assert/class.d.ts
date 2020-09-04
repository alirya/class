import ClassInterface from "../class";
export default function Class<Instance extends ClassInterface<object, unknown[]>>(value: unknown, error?: (value: unknown) => Error): asserts value is Instance;
