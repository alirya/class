import InstanceofValidatable from "../validatable/instance";
export default function Instanceof(instance, message) {
    return function (value) {
        return new InstanceofValidatable(value, instance, message);
    };
}
//# sourceMappingURL=instance.js.map