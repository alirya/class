export default function ClassParameters(value, valid, subject = 'type', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('constructor');
    if (!valid) {
        strings[2] = `${strings[2]},`;
        strings.push('actual', conversion(value));
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=class-parameters.js.map