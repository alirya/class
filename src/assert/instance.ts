import Guard from "../boolean/instance";
import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/instance";

export default function Type<Instance extends {new(...a:unknown[]): any}>(
    value : unknown,
    instance : Instance,
    error : (value:unknown, instance:Instance)=>Error = NumberError
) : asserts value is Instance {

    Callback<[unknown, Instance]>([value, instance], Guard, error);
}
