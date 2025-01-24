import { CustomScalar } from '@nestjs/graphql';
export declare class DateScalar implements CustomScalar<number, Date> {
    description: string;
    parseValue(value: number): Date;
    serialize(value: Date): number;
    parseLiteral(ast: any): Date;
}
