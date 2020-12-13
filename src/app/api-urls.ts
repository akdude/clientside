import { environment } from 'src/environments/environment'

export const apiUrls = {
    // /* get Session key */
    // getSessionKeyUrl: `${environment.apiUrl}/get/sessionkey`,

    // //#region user ACL
    // userAclList: `${environment.apiUrl}/useracl/list`,
    // userAclCreate: `${environment.apiUrl}/useracl/create`,
    // userAclDelete(idUserAcl: string) { return `${environment.apiUrl}/useracl/delete/${idUserAcl}`},
    // userAclUpdate(idUserAcl: string) { return `${environment.apiUrl}/useracl/update/${idUserAcl}`},
    // userAclDetail(idUserAcl: string) { return `${environment.apiUrl}/useracl/${idUserAcl}`},
    // //#endregion

    // //#region User Type
    // userTypeList: `${environment.apiUrl}/usertype/list`,
    // userTypeCreate: `${environment.apiUrl}/usertype/create`,
    // userTypeGet: (userTypeId: string) => `${environment.apiUrl}/usertype/${userTypeId}`,
    // userTypeUpdate: (userTypeId: string) => `${environment.apiUrl}/usertype/update/${userTypeId}`,
    // userTypeDelete: (userTypeId: string) => `${environment.apiUrl}/usertype/delete/${userTypeId}`,
    // userTypeSyncAcl: (userTypeId: string) => `${environment.apiUrl}/usertype/sync/${userTypeId}/acl`,
    // //#endregion

    // //#region Category
    // categoryList:`${environment.apiUrl}/category/list`,
    // categoryCreate: `${environment.apiUrl}/category/create`,
    // categoryGet(idAdCategory: string) {return `${environment.apiUrl}/category/${idAdCategory}` },
    // categoryUpdate(idAdCategory: string) { return `${environment.apiUrl}/category/update/${idAdCategory}` },
    // categoryDelete(idAdCategory: string) { return `${environment.apiUrl}/category/delete/${idAdCategory}`},
    // categoryActivate: (idAdCategory) => `${environment.apiUrl}/category/activate/${idAdCategory}`,
    // //#endregion

    // //#region Location
    // locationList: `${environment.apiUrl}/location/list`,
    // locationCreate: `${environment.apiUrl}/location/create`,
    // locationGet: (locationId) => `${environment.apiUrl}/location/${locationId}`,
    // locationUpdate: (locationId) => `${environment.apiUrl}/location/update/${locationId}`,
    // locationDelete: (locationId) => `${environment.apiUrl}/location/delete/${locationId}`,
    // //#endregion


    // //#region User
    // userList: `${environment.apiUrl}/user/list`,
    // userCreate: `${environment.apiUrl}/user/create`,
    // userGet(idUser: string) {return `${environment.apiUrl}/user/${idUser}` },
    // userUpdate(idUser: string) { return `${environment.apiUrl}/user/update/${idUser}` },
    // userDelete(idUser: string) { return `${environment.apiUrl}/user/delete/${idUser}`},
    // userLogout() { return `${environment.apiUrl}/logout`},
    // userActivate: (idUser) => `${environment.apiUrl}/user/activate/${idUser}`,

    // //#endregion

    // profileUpdate: `${environment.apiUrl}/update/profile`,

    // //#region Advertisment
    // advertisementList: `${environment.apiUrl}/advertisement/list`,
    // advertisementCreate: `${environment.apiUrl}/advertisement/post`,
    // advertisementGet: (idAvertisement) => `${environment.apiUrl}/advertisement/${idAvertisement}`,
    // advertisementUpdate: (idAvertisement) => `${environment.apiUrl}/advertisement/update/${idAvertisement}`,
    // advertisementDelete: (idAvertisement) => `${environment.apiUrl}/advertisement/delete/${idAvertisement}`,
    // advertisementActivate: (idAvertisement) => `${environment.apiUrl}/advertisement/activate/${idAvertisement}`,
    // advertisementBump: (idAvertisement) => `${environment.apiUrl}/advertisement/bump/${idAvertisement}`,
    // advertisementBadgeLink: `${environment.apiUrl}/advertisement/badge/link`,
    // //#endregion
  
    // //#region Category
    // getCategoryParams: (id) => `${environment.apiUrl}/category/params/${id}`,

    // //#region BadgeConfig
    // badgeList: `${environment.apiUrl}/badge/list`,
    // badgeCreate: `${environment.apiUrl}/badge/create`,
    // badgeGet(idBadgeConfig: string) {return `${environment.apiUrl}/badge/${idBadgeConfig}` },
    // badgeUpdate(idBadgeConfig: string) { return `${environment.apiUrl}/badge/update/${idBadgeConfig}` },
    // badgeDelete(idBadgeConfig: string) { return `${environment.apiUrl}/badge/delete/${idBadgeConfig}`},
    // //#endregion

    //  //#region BadgeConfig
    //  bannerList: `${environment.apiUrl}/banner/list`,
    //  bannerCreate: `${environment.apiUrl}/banner/create`,
    //  bannerGet(idBanner: string) {return `${environment.apiUrl}/banner/${idBanner}` },
    //  bannerUpdate(idBanner: string) { return `${environment.apiUrl}/banner/update/${idBanner}` },
    //  bannerDelete(idBanner: string) { return `${environment.apiUrl}/banner/delete/${idBanner}`},
    //  //#endregion

    //  //#region Settings
    //  settings: `${environment.apiUrl}/update/settings`,
    //  getSettings : `${environment.apiUrl}/getSettings`,
    //  createSetting :`${environment.apiUrl}/create/settings`,
    //  settingUpdate: (idSetting) => `${environment.apiUrl}/update/settings/${idSetting}`,
    //  settingDelete: (idSetting) => `${environment.apiUrl}/settings/delete/${idSetting}`,
    //  //#end region

    // /* start language */
    // languageList: `${environment.apiUrl}/language/list`,
    // languageCreate: `${environment.apiUrl}/language/create`,
    // languageGet: (languageId) => `${environment.apiUrl}/language/${languageId}`,
    // languageUpdate: (languageId) => `${environment.apiUrl}/language/update/${languageId}`,
    // languageDelete: (languageId) => `${environment.apiUrl}/language/delete/${languageId}`,
    // /* end language */

    // /* start translation */
    // translationList: `${environment.apiUrl}/translation/list`,
    // translationCreate: `${environment.apiUrl}/translation/create`,
    // translationGet: (translationId) => `${environment.apiUrl}/translation/${translationId}`,
    // translationUpdate: (translationId) => `${environment.apiUrl}/translation/update/${translationId}`,
    // translationDelete: (translationId) => `${environment.apiUrl}/translation/delete/${translationId}`,
    // /* start translation */

    //  //message
    //  sendMessage : `${environment.apiUrl}/send/message`,
    //  fetchMessage: (idApplier) => `${environment.apiUrl}/messages/${idApplier}`
}