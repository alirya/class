import Class from '../class.js';

type Infer<Type> = Type extends Class<infer As> ? As : never;

export default Infer;
