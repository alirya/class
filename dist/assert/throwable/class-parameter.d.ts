import Value from "@dikac/t-value/value";
export default function ClassParameter({ value, subject, conversion, }: Value & {
    subject: string;
    conversion: (value: unknown) => string;
}): Error;
