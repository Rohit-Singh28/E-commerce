import axios from 'axios';

const addImageToCloudinary = async(image) => {
    const formData = new FormData();
        formData.append('file',image)
        formData.append("upload_preset","Mern_Ecommerce")
        formData.append("cloud_name","dr0lc5zxc")

        const response  = await axios.post('https://api.cloudinary.com/v1_1/dr0lc5zxc/image/upload',formData);
        console.log(response);

        return response.data.url;
}

export default addImageToCloudinary;