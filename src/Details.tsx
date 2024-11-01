import { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { ThemeContext } from "./ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./Api/api";
import { AppDispatch } from "./store";

const Details = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data,
    error: apiError,
    loading,
  } = useSelector((state: any) => state.users);
  console.log(data);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (age < 18) setError(true);
    else setError(false);
  };
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  useEffect(() => {
    const resp = dispatch(getUsers());
    console.log(resp);
  }, []);

  return (
    <>
      <Box m={2}>
        <Typography variant="h3" mb={2}>
          Enter your details
        </Typography>
        <Grid container display={"flex"} gap={2}>
          <TextField
            name="name"
            color="primary"
            disabled={false}
            placeholder="Enter Name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
          />
          <TextField
            name="age"
            color="primary"
            error={error}
            disabled={false}
            placeholder="Enter Age"
            label="Age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            size="small"
          />
          <TextField
            name="email"
            color="primary"
            disabled={false}
            placeholder="Enter Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
          />
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Box>

      <Box m={2}>
        <Box
          height={"300px"}
          width={"300px"}
          sx={{ backgroundColor: theme === "light" ? "blue" : "darkblue" }}
        ></Box>
        <Button
          variant="contained"
          onClick={toggleTheme}
          sx={{ marginTop: "20px" }}
        >
          Toggle Theme
        </Button>
      </Box>

      <Box m={4}>
        {loading && <Typography variant="h4">Loading...</Typography>}
        {apiError && <Typography variant="h4">{apiError}</Typography>}
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap" // Allows cards to wrap if there's not enough space
        
        sx={{
          maxWidth: "95%",
          border: "1px solid black",
          padding: "16px",
          gap: "16px",
        }} // Added gap for spacing
        ml={2}
      >
        {data?.map((user: any) => (
          <Card
            key={user.id}
            sx={{
              width: "300px",
              height: "300px",
              border: "1px solid black",
              padding: "8px",
            }}
          >
            <CardContent>
              <Typography variant="h5">{user.name}</Typography>
              <Typography variant="h6">{user.email}</Typography>
              <Typography variant="h6">{user.phone}</Typography>
              <Typography variant="h6">{user.company.name}</Typography>
              <Typography variant="h6">
                {user.address.suite}, {user.address.street}, {user.address.city}
                , {user.address.zipcode}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Details;
