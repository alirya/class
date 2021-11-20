import Assert from "../assert/class";
import StringError from "../assert/throwable/class-parameters";
export default function Class(value, error = StringError) {
    Assert(value, error);
    return value;
}
//# sourceMappingURL=class.js.map