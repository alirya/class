import Guard from "../boolean/class";
import Callback from "@dikac/t-function/assert/callback";
import ClassError from "./throwable/class";
export default function Class(value, error = ClassError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=class.js.map