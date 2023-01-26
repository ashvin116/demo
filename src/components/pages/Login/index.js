import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { loginService } from "../../../services";


const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const handelChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, "valuevalue");
    loginService(value)
    navigate("/dashboard");

  };

  return (
    <div style={{ width: "20%", margin: '100px auto' }}>
      <Card sx={{ minWidth: 275, padding: '20px', backgroundColor: '#f3e7d3' }} elevation={5} >
        <Typography
          variant="h5"
          style={{ textAlign: 'center', padding: '20px 0px' }}>
          LOG IN
        </Typography>

        <form onSubmit={handleSubmit} noValidate>

          <TextField
            variant="outlined"
            label="Username"
            size="small"
            className="form-control"
            type="username"
            name="username"
            onChange={handelChange}
            value={value.username}
            placeholder=" Enter email"
            required
          />
          <br /> <br />

          <TextField
            variant="outlined"
            label="Password"
            size="small"
            className="form-control"
            type="password"
            name="password"
            onChange={handelChange}
            value={value.password}
            placeholder="Enter Password"
            required
          />
          <br /> <br />
          <div className="text-center">
            <Button
              variant="contained"
              type="submit">
              Login
            </Button>
            <br /> <br />
            <span> &nbsp; Don't have an account? </span>
            <Link to="/register">register</Link>
          </div>
        </form>
      </Card>


    </div>
  );
};

export { Login };
