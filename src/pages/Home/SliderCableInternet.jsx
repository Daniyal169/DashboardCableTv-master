import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VerticalNavbar from "../../components/Sidebar";
import HeaderCommon from "../HeaderCommon";
import { Toaster, toast } from "react-hot-toast";

import axios from "axios";
import uploadImage from "../../utiles/imageUpload";
import { LoadingButton } from "@mui/lab";
const SliderCableInternet = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [data, setData] = useState({
    title: "Home.service_cableinternet_slider.title",
    description: "Home.service_cableinternet_slider.description",
    image: "Home.service_cableinternet_slider.image",
  });
  const [loading, setloading] = useState(false);

  const handleImageUpload = (e) => {
    // Handle image upload here and set it in formData
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      let imageUrl = "";
      if (formData.image) {
        imageUrl = await uploadImage(formData.image);

        setFormData({
          ...formData,
          image: "",
        });
      }
      await axios.post(`http://localhost:5000/api/update/website`, {
        mongoObj: {
          title: data.title,
          description: data.description,
          image: data.image,
        },
        data: {
          title: formData.title,
          description: formData.description,
          image: imageUrl,
        },
      });

      toast.success("successfully uploaded");
    } catch (error) {
      if (typeof error === "object") toast.error(error.message);
      else toast.error("Error Occured");
      console.log(error);
    }
    setloading(false);
  };

  return (
    <>
      <Toaster />
      <VerticalNavbar />
      <HeaderCommon title="Edit Services => CableInternet Slider" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Edit Cable Internet Slider</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.subtitle}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <div className="uploadimg">
                  <label>Upload Image:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />

                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </Button>
                </div>
                <div className="updatebtn">
                  <LoadingButton
                    loading={loading}
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Update
                  </LoadingButton>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SliderCableInternet;
