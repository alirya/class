import Callback from "@dikac/t-validator/validatable/callback-function";
import ClassGuard from "../boolean/class";
export default function Class(value, message) {
    return Callback(value, ClassGuard, message);
}
//# sourceMappingURL=class.js.map