import Class from "../../class";
export default function InstanceParameters<Instance extends Class<object, unknown[]>>(value: object, valid: boolean, instance: Instance, subject?: string): string;
