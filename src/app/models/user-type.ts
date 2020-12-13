import { UserAcl } from './user-Acl';

export class UserType {
    idUserType: string;
    userTypeSlug: string;
    userTypeNum: string;
    userTypeName: string;
    userAcls: UserAcl[];
}