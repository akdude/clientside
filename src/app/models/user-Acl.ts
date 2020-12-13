export class UserAcl {
    idUserAcl: string;
    namespace: string;
    route: string;
    path: string;
    rule: string;
    isActive: number;
    isChecked: boolean; // using in edit-user-type component for checkbox
}