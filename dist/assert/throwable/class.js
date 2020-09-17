import ClassType from "../string/class";
export default function Class(string, subject = 'type', conversion = value => typeof value) {
    return new Error(ClassType(false, string, subject, conversion));
}
//# sourceMappingURL=class.js.map