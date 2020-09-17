import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences-must";
export default function Instance(valid, value, instance, subject = '') {
    const sentences = Sentences(valid, [subject]);
    sentences.expect = ['instanceof of', instance.name];
    sentences.comma.push('expect');
    sentences.actual.push('actual', `"${Name(value)}"`);
    return sentences.message;
}
//# sourceMappingURL=instance.js.map