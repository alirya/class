import Class from "../class";
declare type Infer<Type> = Type extends Class<infer As> ? As : never;
export default Infer;
