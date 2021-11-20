import Class from "../../class";
export default function InstanceParameters<Instance extends Class<object, unknown[]>>(value: object, instance: Instance, message?: (value: unknown, valid: boolean, instance: Instance) => string, error?: (message: string) => Error): Error;
