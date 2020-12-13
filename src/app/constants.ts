export const MEDIA_FILES_DIV_ID = "medialFilesDivId";
export function getMediaFiles() {
    let files = JSON.parse(document.getElementById(MEDIA_FILES_DIV_ID).innerHTML);
    return files; 
};

export const paginationConfig = {itemsPerPage: 5, currentPage: 1, totalItems: 0, maxSize: 5, previousLabel: "Previous", nextLabel: "Next"}