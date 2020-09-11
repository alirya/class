import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences-must";
import Class from "../../class";

export default function Instance<Instance extends Class<object, unknown[]>>(
    valid : boolean,
    value : object,
    instance : Instance,
    subject : string = '',
) : string {

    const sentences = Sentences(valid, [subject]);

    sentences.expect = ['instanceof of', instance.name];

    sentences.comma.push('expect');
    sentences.actual.push('actual', `"${Name(value)}"`)

    return sentences.message;
}
