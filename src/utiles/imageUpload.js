import axios from "axios";

const apiKey = "624351699245347";
const cloudName = "dcuclo6tt";
const uploadImage = async (file) => {
  if (file.size > 1000000) {
    // size is greater than 1mb error
    throw new Error("image size cannot be greater than 1mb");
  }
  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    // format error

    throw new Error("only JPEG and PNG are allowed");
  }

  const data = new FormData();
  data.append("file", file);
  data.append("api_key", apiKey);
  data.append("upload_preset", "cabletv");

  const cloudinaryResponse = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  console.log("cloudinaryResponse", cloudinaryResponse);
  if (cloudinaryResponse.status === 200) {
    return cloudinaryResponse.data.url;
  } else {
    throw new Error("error while uploading image");
  }
};

export default uploadImage;
