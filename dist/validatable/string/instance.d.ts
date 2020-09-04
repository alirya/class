import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import ClassInterface from "../../class/class";
export default function Instance(object: Readonly<Value<object> & ClassInterface & Validatable>): string;
