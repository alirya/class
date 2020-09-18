import Class from "../class";

const handler : ProxyHandler<any> = {construct() { return {}; }};
/**
 * check if {@param value} is class/constructable
 * @param value
 */
export default function Class(value : unknown) : value is Class<object, unknown[]>  {

    if(value && (value as any).prototype && (value as any).prototype.constructor.name) {

        return true;
    }

    try {

        const proxy = new Proxy(value, handler);
        new proxy();
        return true;

    } catch (e) {

        return false;
    }
}
