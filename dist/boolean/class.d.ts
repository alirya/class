import Class from "../class";
/**
 * check if {@param value} is class/constructable
 * @param value
 */
export default function Class(value: unknown): value is Class<object, unknown[]>;
