export default function Instance<Instance extends {
    new (...a: unknown[]): any;
}>(valid: boolean, value: object, instance: Instance, subject?: string): string;
