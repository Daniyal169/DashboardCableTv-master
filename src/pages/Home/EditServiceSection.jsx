// import React, { useState } from "react";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import VerticalNavbar from "../../components/Sidebar";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import HeaderCommon from "../HeaderCommon";
// // import "../styles/EditServiceSection.css"; // You can create this CSS file

// const EditServiceSection = () => {
//   const [loading, setloading] = useState(false);

//   // Define the initial state based on the provided object
//   const initialServicesState = {
//     title: "Our Services",
//     heading: "What We Offer",
//     description: "Explore our range of services.",
//     slider_1: {
//       title: "Slider 1 Title",
//       description: "Description for Slider 1",
//       image: "Image for Slider 1",
//     },
//     slider_2: {
//       title: "Slider 2 Title",
//       description: "Description for Slider 2",
//       image: "Image for Slider 2",
//     },
//     slider_3: {
//       title: "Slider 3 Title",
//       description: "Description for Slider 3",
//       image: "Image for Slider 3",
//     },
//     slider_4: {
//       title: "Slider 4 Title",
//       description: "Description for Slider 4",
//       image: "Image for Slider 4",
//     },
//   };

//   // Create state variables for services and individual sliders
//   const [services, setServices] = useState(initialServicesState);
//   const [slider1, setSlider1] = useState(initialServicesState.slider_1);
//   const [slider2, setSlider2] = useState(initialServicesState.slider_2);
//   const [slider3, setSlider3] = useState(initialServicesState.slider_3);
//   const [slider4, setSlider4] = useState(initialServicesState.slider_4);

//   // Create functions to update the state of individual sliders
//   const handleSlider1Update = (newData) => {
//     setSlider1({ ...slider1, ...newData });
//   };

//   const handleSlider2Update = (newData) => {
//     setSlider2({ ...slider2, ...newData });
//   };

//   const handleSlider3Update = (newData) => {
//     setSlider3({ ...slider3, ...newData });
//   };

//   const handleSlider4Update = (newData) => {
//     setSlider4({ ...slider4, ...newData });
//   };

//   // Create a function to update the state of the entire services section
//   const handleServicesUpdate = () => {
//     setServices({
//       ...services,
//       slider_1: slider1,
//       slider_2: slider2,
//       slider_3: slider3,
//       slider_4: slider4,
//     });
//   };
//   const handleImageUpload = (e) => {
//     // Handle image upload here and set it in formData
//   };

//   return (
//     <>
//       <VerticalNavbar />
//       <HeaderCommon title="Edit Service Section" />
//       <Container>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={3}></Grid>
//           <Grid item xs={12} md={9}>
//             <Paper elevation={3} style={{ padding: "20px" }}>
//               <Typography variant="h6">Edit Services Section</Typography>

//               {/* Edit Services Section Fields */}
//               <TextField
//                 fullWidth
//                 label="Title"
//                 name="title"
//                 value={services.title}
//                 onChange={(e) =>
//                   setServices({ ...services, title: e.target.value })
//                 }
//                 margin="normal"
//                 variant="outlined"
//               />
//               <TextField
//                 fullWidth
//                 label="Heading"
//                 name="heading"
//                 value={services.heading}
//                 onChange={(e) =>
//                   setServices({ ...services, heading: e.target.value })
//                 }
//                 margin="normal"
//                 variant="outlined"
//               />
//               <TextField
//                 fullWidth
//                 label="Description"
//                 name="description"
//                 value={services.description}
//                 onChange={(e) =>
//                   setServices({ ...services, description: e.target.value })
//                 }
//                 margin="normal"
//                 variant="outlined"
//                 multiline
//               />

//               {/* Edit Slider 1 Fields */}
//               <Typography variant="h6">Edit Slider 1</Typography>
//               <TextField
//                 fullWidth
//                 label="Slider 1 Title"
//                 value={slider1.title}
//                 onChange={(e) => handleSlider1Update({ title: e.target.value })}
//                 margin="normal"
//                 variant="outlined"
//               />
//               <TextField
//                 fullWidth
//                 label="Slider 1 Description"
//                 value={slider1.description}
//                 onChange={(e) =>
//                   handleSlider1Update({ description: e.target.value })
//                 }
//                 margin="normal"
//                 variant="outlined"
//                 multiline
//               />
//               <div className="uploadimg">
//                 <label>Upload Image:</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   style={{ display: "none" }}
//                 />

//                 <Button
//                   variant="contained"
//                   component="label"
//                   startIcon={<CloudUploadIcon />}
//                 >
//                   Upload File
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     style={{ display: "none" }}
//                   />
//                 </Button>
//               </div>

//               <Typography variant="h6">Edit Slider 2</Typography>
//               <TextField
//                 fullWidth
//                 label="Slider 2 Title"
//                 value={slider2.title}
//                 onChange={(e) => handleSlider1Update({ title: e.target.value })}
//                 margin="normal"
//                 variant="outlined"
//               />
//               <TextField
//                 fullWidth
//                 label="Slider 2 Description"
//                 value={slider2.description}
//                 onChange={(e) =>
//                   handleSlider1Update({ description: e.target.value })
//                 }
//                 margin="normal"
//                 variant="outlined"
//                 multiline
//               />
//               <div className="uploadimg">
//                 <label>Upload Image:</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   style={{ display: "none" }}
//                 />

//                 <Button
//                   variant="contained"
//                   component="label"
//                   startIcon={<CloudUploadIcon />}
//                 >
//                   Upload File
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     style={{ display: "none" }}
//                   />
//                 </Button>
//               </div>
//               <Typography variant="h6">Edit Slider 3</Typography>
//               <TextField
//                 fullWidth
//                 label="Slider 3 Title"
//                 value={slider3.title}
//                 onChange={(e) => handleSlider1Update({ title: e.target.value })}
//                 margin="normal"
//                 variant="outlined"
//               />
//               <TextField
//                 fullWidth
//                 label="Slider 3 Description"
//                 value={slider3.description}
//                 onChange={(e) =>
//                   handleSlider1Update({ description: e.target.value })
//                 }
//                 margin="normal"
//                 variant="outlined"
//                 multiline
//               />
//               <div className="uploadimg">
//                 <label>Upload Image:</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   style={{ display: "none" }}
//                 />

//                 <Button
//                   variant="contained"
//                   component="label"
//                   startIcon={<CloudUploadIcon />}
//                 >
//                   Upload File
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     style={{ display: "none" }}
//                   />
//                 </Button>
//               </div>
//               <Typography variant="h6">Edit Slider 4</Typography>
//               <TextField
//                 fullWidth
//                 label="Slider 4 Title"
//                 value={slider4.title}
//                 onChange={(e) => handleSlider1Update({ title: e.target.value })}
//                 margin="normal"
//                 variant="outlined"
//               />
//               <TextField
//                 fullWidth
//                 label="Slider 4 Description"
//                 value={slider4.description}
//                 onChange={(e) =>
//                   handleSlider1Update({ description: e.target.value })
//                 }
//                 margin="normal"
//                 variant="outlined"
//                 multiline
//               />
//               <div className="uploadimg">
//                 <label>Upload Image:</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   style={{ display: "none" }}
//                 />

//                 <Button
//                   variant="contained"
//                   component="label"
//                   startIcon={<CloudUploadIcon />}
//                 >
//                   Upload File
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     style={{ display: "none" }}
//                   />
//                 </Button>
//               </div>
//               <div className="updatebtn">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   style={{ marginTop: "10px" }}
//                 >
//                   Update
//                 </Button>
//               </div>
//               {/* Similarly, add fields for Slider 2, Slider 3, and Slider 4 */}
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default EditServiceSection;
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VerticalNavbar from "../../components/Sidebar";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HeaderCommon from "../HeaderCommon";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
// import "../../styles/EditServiceSection.css"; // You can create this CSS file

const EditServiceSection = () => {
  const [formData, setFormData] = useState({
    title: "",
    heading: "",
    description: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [data, setData] = useState({
    title: "Home.services.title",
    heading: "Home.services.heading",
    description: "Home.services.description",
  });
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);

      await axios.post(`http://localhost:5000/api/update/website`, {
        mongoObj: {
          title: data.title,
          heading: data.heading,
          description: data.description,
        },
        data: {
          title: formData.title,
          heading: formData.heading,
          description: formData.description,
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
      <HeaderCommon title="Edit Service Section" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">Edit Services Section</Typography>

              {/* Edit Services Section Fields */}
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

export default EditServiceSection;
