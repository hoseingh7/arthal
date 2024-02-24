// Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

// Component
const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    category: "",
    description: "", // New field
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleCategoryChange = (event) => {
    setValues({ ...values, category: event.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          background: "#0d929a", // Common background for all inputs
          padding: "20px", // Add padding for better spacing
        }}>
        <Typography
          style={{ color: "white" }}
          component="h1"
          variant="h5">
          افزودن
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}>
          <Grid
            container
            spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="توضیح کوتاه"
                name="name"
                autoFocus
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="عنوان"
                name="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}>
              <InputLabel id="category-label">دسته‌بندی</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={values.category}
                onChange={handleCategoryChange}
                fullWidth>
                <MenuItem value="category1"> پیشفرض</MenuItem>
              </Select>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="date"
                type="date"
                id="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setValues({ ...values, date: e.target.value })}
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="شرح"
                id="description"
                multiline
                rows={4}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            style={{ width: "60px", background: "yellow" }}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            ذخیره
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Create;
