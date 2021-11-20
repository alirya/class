import ClassType from "../string/class-parameters";
export default function ClassParameters(string, subject = 'type', conversion = value => typeof value) {
    return new Error(ClassType(string, false, subject, conversion));
}
//# sourceMappingURL=class-parameters.js.map