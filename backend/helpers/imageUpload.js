import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

export const imageUpload = async(image, folderName) => {
    try {
        const uploadedImage = await cloudinary.uploader.upload(image,{
            resource_type: "image",
            folder: folderName
        })
        fs.unlinkSync(image)
        return {
            id: uploadedImage.asset_id,
            location: uploadedImage.secure_url
        }
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
            uploadedImages.push(imageInfo);
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return uploadedImages;
}

export const deleteImageFromCloudinary = async(image_id) => {
    const result = await cloudinary.uploader.destroy(image_id)
    return result
}