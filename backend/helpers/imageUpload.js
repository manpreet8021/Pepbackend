import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

export const imageUpload = async(images) => {
    try {
        const uploadedImage = await cloudinary.uploader.upload(images,{
            resource_type: "image",
            folder: 'country'
        })
        fs.unlinkSync(images)
        return uploadedImage
    } catch (error) {
        fs.unlinkSync(images)
        return false;
    }
}