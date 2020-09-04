import Class from "../../class";
export default function Instance<Instance extends Class<object, unknown[]>>(value: object, instance: Instance, message?: (valid: boolean, value: unknown, instance: Instance) => string, error?: (message: string) => Error): Error;
