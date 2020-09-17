import SentencesMust from "@dikac/t-string/message/sentences-must";
export default function Class(valid, value, subject = 'type', conversion = value => typeof value) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('constructor');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    sentence.actual.push('actual', conversion(value));
    return sentence.message;
}
//# sourceMappingURL=class.js.map