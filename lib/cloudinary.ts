'use server'
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
})

const uploadImage = async (image: string) => {
    const result = await cloudinary.uploader
        .upload(image)
        .then((result: UploadApiResponse) => {
            return result
        })
        .catch((error: UploadApiErrorResponse) => {
            console.log('error:', error)
            return error
        })
    return result
}

export default uploadImage
