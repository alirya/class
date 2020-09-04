export default function Instance<Instance extends {
    new (...a: unknown[]): any;
}>(value: object, instance: Instance, message?: (valid: boolean, value: unknown, instance: Instance) => string, error?: (message: string) => Error): Error;
