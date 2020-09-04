import Name from "@dikac/t-object/string/name";
import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Instance<Instance extends {new(...a:unknown[]): any}>(
    valid : boolean,
    value : object,
    instance : Instance,
    subject : string = '',
) : string {

    const sentence = SentencesIs(
        valid,
        [subject, Name(value)],
        {
            valid:['is instanceof of'],
            invalid:['is not instanceof of'],
        }, [instance.name]
    );

    return sentence.message;
}
