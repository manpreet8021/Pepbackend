const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };
export const MAX_FILE_SIZE = 1000000*5;

export default function isValidFileType(file, fileType) {
    if(file && file.length) {
        let returnValue = true;
        file.forEach(element => {
            if(!element.name || validFileExtensions[fileType].indexOf(element.name.toLowerCase().split('.').pop()) === -1 || element.size > MAX_FILE_SIZE){
                returnValue = false
                return
            }
        });
        return returnValue
    } else {
        return file && file.name && validFileExtensions[fileType].indexOf(file.name.toLowerCase().split('.').pop()) > -1 && file.size <= MAX_FILE_SIZE;
    }
}