import SentencesMust from "@dikac/t-string/message/sentences-must";

export default function Class(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('constructor');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    sentence.actual.push('actual', conversion(value));

    return sentence.message;
}
