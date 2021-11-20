import Name from "@dikac/t-object/string/name";
export default function InstanceParameters(value, valid, instance, subject = '') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('instanceof of', instance.name);
    if (!valid) {
        strings[3] = `${strings[3]},`;
        strings.push('actual', `"${Name(value)}"`);
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=instance-parameters.js.map