const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };
export const MAX_FILE_SIZE = 102400;

export default function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}