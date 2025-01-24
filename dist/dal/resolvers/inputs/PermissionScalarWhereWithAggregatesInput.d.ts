import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PermissionScalarWhereWithAggregatesInput {
    AND?: PermissionScalarWhereWithAggregatesInput[] | undefined;
    OR?: PermissionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PermissionScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
}
