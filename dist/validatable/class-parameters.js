import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import ClassGuard from "../boolean/class";
export default function ClassParameters(value, message) {
    return Callback(value, ClassGuard, message);
}
//# sourceMappingURL=class-parameters.js.map