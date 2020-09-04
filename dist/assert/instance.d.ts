export default function Type<Instance extends {
    new (...a: unknown[]): any;
}>(value: unknown, instance: Instance, error?: (value: unknown, instance: Instance) => Error): asserts value is Instance;
