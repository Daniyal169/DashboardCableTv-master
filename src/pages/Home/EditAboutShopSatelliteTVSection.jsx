import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VerticalNavbar from "../../components/Sidebar";
import HeaderCommon from "../HeaderCommon";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import uploadImage from "../../utiles/imageUpload";
import { LoadingButton } from "@mui/lab";

// import "../styles/EditAboutShopSatelliteTVSection.css"; // You can create this CSS file

const EditAboutShopSatelliteTVSection = () => {
  // Define the initial state based on the provided object
  const [formData, setFormData] = useState({
    title: "",
    heading: "",
    description: "",
    fig_1: "",
    fig_2: "",
    fig_3: "",
    aboutshopsatelliteBG: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [data, setData] = useState({
    title: "Home.aboutshopsatellitetv.title",
    heading: "Home.aboutshopsatellitetv.heading",
    description: "Home.aboutshopsatellitetv.description",
    fig_1: "Home.aboutshopsatellitetv.fig_1",
    fig_2: "Home.aboutshopsatellitetv.fig_2",
    fig_3: "Home.aboutshopsatellitetv.fig_3",
    aboutshopsatelliteBG: "Home.aboutshopsatellitetv.aboutshopsatelliteBG",
  });
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("submit");
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
          heading: data.heading,
          description: data.description,
          fig_1: data.fig_1,
          fig_2: data.fig_2,
          fig_3: data.fig_3,
          aboutshopsatelliteBG: data.aboutshopsatelliteBG,
        },
        data: {
          title: formData.title,
          heading: formData.heading,
          description: formData.description,
          fig_1: formData.fig_1,
          fig_2: formData.fig_2,
          fig_3: formData.fig_3,
          aboutshopsatelliteBG: imageUrl,
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
  const handleImageUpload = (e) => {
    // Handle image upload here and set it in formData
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };
  return (
    <>
      <Toaster />
      <VerticalNavbar />
      <HeaderCommon title="Edit About Shop Satellite TV Section" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">
                Edit About Shop Satellite TV Section
              </Typography>
              <form onSubmit={handleSubmit}>
                {/* Edit About Shop Satellite TV Section Fields */}
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
                  label="Heading"
                  name="heading"
                  value={formData.heading}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                  multiline
                />
                <TextField
                  fullWidth
                  label="Figure 1"
                  name="fig_1"
                  value={formData.fig_1}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Figure 2"
                  name="fig_2"
                  value={formData.fig_2}
                  onChange={handleInputChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Figure 3"
                  name="fig_3"
                  value={formData.fig_3}
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

                {/* Update Button */}
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

export default EditAboutShopSatelliteTVSection;
