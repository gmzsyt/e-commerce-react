import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Register=()=> {
  const navigate = useNavigate()

  const handleNavigate = ()=>{
    navigate("/login")
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: values => {
      console.log(values);
      
      navigate("/");
    },
  });

  return (
    <div>
      <Container
        sx={{
          marginTop: "5rem",
          height: "calc(80vh)",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "3rem",
          borderRadius: "20px",
        }}
        maxWidth="sm"
      >
        <Avatar sx={{ margin: "auto", bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={{ margin: "1rem" }} variant="h4">
          REGISTER
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="username"
                label="User Name"
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginBottom: "1rem" }}
              >
                REGISTER
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link
                  sx={{
                    textDecoration: "none",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => handleNavigate()}
                >
                  Login
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default Register;
