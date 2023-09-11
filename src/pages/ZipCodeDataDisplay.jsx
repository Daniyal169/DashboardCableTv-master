import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Rating,
  Typography,
  Box,
  Container,
} from "@mui/material";
import "../styles/ProviderForm.css";
import HeaderCommon from "./HeaderCommon";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";

function ProviderForm() {
  const [providerName, setProviderName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState(""); // State to store a new feature temporarily
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(null);
  const [channel, setChannel] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setloading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);


  // to add more feature
  const addFeature = () => {
    if (newFeature.trim() !== "") {
      setFeatures([...features, newFeature]);
      setNewFeature(""); // Clear the input field
    }
  };

  const handleRatingChange = (_event, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setloading(true);
      const res = await axios.post(`http://localhost:5000/api/add-provider`, {
        CompanyName: providerName,
        zipcodes: [zipCode],
        MaxDownloadSpeedsUpTo: maxSpeed,
        Features: features,
        Price: price,
        rating: rating,
        Channels: channel,
        Category: category,
      });

      // Set the submitted data in the state
      setSubmittedData(res.data.payload);
      toast.success("Successfully added");
    } catch (error) {
      console.log(error);
      toast.error("Error adding provider");
    }
    setloading(false);
  };


  return (
    <div className="Provider-container">


      <Toaster />
      <HeaderCommon title="Add Zip Code" />
      <Container maxWidth="sm">
        <h2 className="heading-1">Add Provider</h2>
        <form onSubmit={handleSubmit}>

          {/* Display the data user submit */}
          {submittedData && (
            <div>
              <h2>Submitted Data</h2>
              <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            </div>
          )}

          <TextField
            label="Provider Name"
            fullWidth
            name="providedname"
            variant="outlined"
            margin="normal"
            value={providerName}
            onChange={(e) => setProviderName(e.target.value)}
          />


          <TextField
            label="Zip Code"
            fullWidth
            name="zipcode"
            variant="outlined"
            margin="normal"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <TextField
            label="Max Speed"
            fullWidth
            name="maxspeed"
            variant="outlined"
            margin="normal"
            value={maxSpeed}
            onChange={(e) => setMaxSpeed(e.target.value)}
          />
          <TextField
            label="Channels"
            fullWidth
            name="channels"
            variant="outlined"
            margin="normal"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
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
            name="price"
            variant="outlined"
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Typography variant="h6" gutterBottom>
            Category
          </Typography>
          <Select
            label="Category"
            fullWidth
            name="category"
            variant="outlined"
            margin="normal"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="TV">TV</MenuItem>
            <MenuItem value="Internet">Internet</MenuItem>
            <MenuItem value="Bundles">Bundles</MenuItem>
          </Select>
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
            Add Now
          </LoadingButton>
        </form>
      </Container>
    </div >
  );
}

export default ProviderForm;
