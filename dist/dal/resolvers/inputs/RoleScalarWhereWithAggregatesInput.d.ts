import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class RoleScalarWhereWithAggregatesInput {
    AND?: RoleScalarWhereWithAggregatesInput[] | undefined;
    OR?: RoleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RoleScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
}
