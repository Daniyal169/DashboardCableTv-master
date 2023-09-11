import React, { useState } from "react";
import {
  TextField,
  Button,
  Rating,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import "../styles/ProviderForm.css";
import HeaderCommon from "../pages/HeaderCommon";
import VerticalNavbar from "./Sidebar";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
function ProviderForm() {
  const [providerName, setProviderName] = useState("");
  const [zipcodes, setzipcodes] = useState("");
  const [MaxDownloadSpeedsUpTo, setMaxDownloadSpeedsUpTo] = useState("");
  const [Features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState(""); // State to store a new feature temporarily
  const [Price, setPrice] = useState("");
  const [rating, setRating] = useState(null);
  const [Channels, setChannels] = useState("");
  const [loading, setloading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);


  // to add more feature
  const addFeature = () => {
    if (newFeature.trim() !== "") {
      setFeatures([...Features, newFeature]);
      setNewFeature(""); // Clear the input field
    }
  };
  const companies = [
    "FeaturesAT&T Internet + TV",
    "AT&T Internet",
    "Astound Broadband Powered by RCN Cable",
    "Astound Broadband Powered by Wave Cable",
    "Astound Broadband Powered by Wave TV + Internet",
    "Astound Broadband powered by Grande TV",
    "Buckeye Broadband Bundles",
    "Buckeye Broadband",
    "Cox",
    "DIRECTV + AT&T Internet",
    "DIRECTV STREAM",
    "DISH TV + Frontier Internet",
    "DISH TV + Windstream High-Speed Internet",
    "Directv",
    "DishTV",
    "Fidelity Communications",
    "Frontier",
    "Google Fiber",
    "Grande TV + Internet",
    "HughesNet",
    "Mediacom Cable TV & Internet",
    "Mediacom Cable",
    "Optimum Cable TV & Internet",
    "Optimum TV",
    "Sparklight TV",
    "Spectrum Cable",
    "Suddenlink TV + Internet",
    "Suddenlink TV",
    "Verizon",
    "Viasat Satellite Internet",
    "WOW! TV",
    "WOW!TV+Internet",
    "Xfinity TV from Comcast",
    "Armstrong",
    "Astound Broadband Powered by RCN Cable TV & Internet",
    "Astound Broadband Powered by RCN Internet",
    "Astound Broadband Powered by Wave Internet",
    "Atlantic Broadband",
    "Buckeye Broadband",
    "CenturyLink High-Speed Internet",
    "Cox Cable TV & Internet",
    "Cox",
    "Earthlink",
    "Fidelity Communications",
    "Frontier",
    "Google Fiber Internet",
    "Grande Internet",
    "Mediacom Cable Internet",
    "Optimum Internet",
    "Rise Broadband",
    "Sparklight TV & Internet",
    "Sparklight TV",
    "Spectrum Cable Internet",
    "Spectrum Cable TV & Internet",
    "Suddenlink Internet",
    "Verizon Bundles",
    "Verizon",
    "WOW!Internet",
    "Windstream High-Speed Internet",
    "Xfinity Cable TV & Internet from Comcast",
    "Xfinity Internet from Comcast",
    "Ziply Fiber",
  ];

  const handleRatingChange = (_event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setloading(true);
      const response = await axios.post(
        `http://localhost:5000/api/update/provider?companyName=${providerName}`,
        {
          zipcodes: zipcodes || null,
          MaxDownloadSpeedsUpTo: MaxDownloadSpeedsUpTo || null,
          Features: Features || null,
          Price: Price ? parseFloat(Price) : null,
          rating: rating || null,
          Channels: Channels || null,
        }
      );
      setSubmittedData(response.data.payload);
      toast.success("Successfully Updated");
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.response.data.message);
    }
    setloading(false);
  };

  return (
    <>
      <Toaster />

      <VerticalNavbar />
      <div className="Provider-container">
        <HeaderCommon title="Update Zip Code" />
        <Container maxWidth="sm">
          <h2 className="heading-1">Update Provider</h2>
          <form onSubmit={handleSubmit}>

            {submittedData && (
              <div>
                <h2>Submitted Data</h2>
                <pre>{JSON.stringify(submittedData, null, 2)}</pre>
              </div>
            )}
            {/* <InputLabel>Provider Name</InputLabel>
            <Select
            value={providerName}
            onChange={(e) => setProviderName(e.target.value)}
            >
                <MenuItem value="" disabled>
                Choose Provider
                </MenuItem>
                {companies.map((company, index) => (
                    <MenuItem key={index} value={company}>
                    {company}
                    </MenuItem>
                    ))}
            </Select> */}
            <TextField
              select
              label="Provider Name"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
              fullWidth
            >
              {companies.map((company, index) => (
                <MenuItem key={index} value={company}>
                  {company}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Zip Code"
              fullWidth
              name="zipcodes"
              variant="outlined"
              margin="normal"
              value={zipcodes}
              onChange={(e) => setzipcodes(e.target.value)}
            />
            <TextField
              label="Max Speed"
              fullWidth
              name="MaxDownloadSpeedsUpTo"
              variant="outlined"
              margin="normal"
              value={MaxDownloadSpeedsUpTo}
              onChange={(e) => setMaxDownloadSpeedsUpTo(e.target.value)}
            />
            <TextField
              label="Channelss"
              fullWidth
              name="Channels"
              variant="outlined"
              margin="normal"
              value={Channels}
              onChange={(e) => setChannels(e.target.value)}
            />
            <TextField
              label="New Feature"
              fullWidth
              name="newfeature"
              variant="outlined"
              margin="normal"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={addFeature}>
              Add Feature
            </Button>

            <TextField
              label="Price"
              fullWidth
              name="Price"
              variant="outlined"
              margin="normal"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Typography variant="h6" gutterBottom>
              Rating
            </Typography>
            <Box display="flex" alignItems="center">
              <Rating
                name="rating"
                value={rating}
                onChange={handleRatingChange}
                precision={0.1}
                size="large"
              />
              {rating !== null && (
                <Typography variant="h6" style={{ marginLeft: "10px" }}>
                  {rating}
                </Typography>
              )}
            </Box>
            <LoadingButton
              loading={loading}
              variant="contained"
              color="primary"
              type="submit"
            >
              Update
            </LoadingButton>
          </form>
        </Container>
      </div>
    </>
  );
}

export default ProviderForm;
