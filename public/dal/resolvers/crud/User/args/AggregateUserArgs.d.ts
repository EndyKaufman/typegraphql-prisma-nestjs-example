import { UserOrderByWithRelationInput } from '../../../inputs/UserOrderByWithRelationInput';
import { UserWhereInput } from '../../../inputs/UserWhereInput';
import { UserWhereUniqueInput } from '../../../inputs/UserWhereUniqueInput';
export declare class AggregateUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
