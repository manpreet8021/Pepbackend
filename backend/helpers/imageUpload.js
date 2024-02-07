import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

export const imageUpload = async(image, folderName) => {
    try {
        const uploadedImage = await cloudinary.uploader.upload(image,{
            resource_type: "image",
            folder: folderName
        })
        fs.unlinkSync(image)
        return uploadedImage
    } catch (error) {
        fs.unlinkSync(image)
        return false;
    }
}

export const uploadMultipleImages = async(images, folderName) => {
    let uploadedImages = [];
    
    for (const file of images) {
        try {
            let imageInfo = await imageUpload(file.path, folderName);
            let struct = {
                id: imageInfo.asset_id,
                location: imageInfo.secure_url
            };
            uploadedImages.push(struct);
        } catch (error) {
            return false
        }
    }

    return uploadedImages;
}