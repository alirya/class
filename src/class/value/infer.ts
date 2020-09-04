import Class from "../class";

type Infer<Type> = Type extends Class<infer As> ? As : never;

export default Infer;
