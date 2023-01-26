import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { registerUser } from "../../../services";

const Register = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    first_name: "",
    last_name: '',
    user_name: '',
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(value)
    navigate("/");
  };

  return (
    <div style={{ width: "20%", margin: '100px auto' }}>
      <div className="main">
        <Card sx={{ minWidth: 275, padding: '20px', backgroundColor: '#f3e7d3' }} elevation={5} >
          <Typography
            variant="h5"
            style={{ textAlign: 'center', padding: '20px 0px' }}>
            REGISTER
          </Typography>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              label="First Name"
              size="small"
              className="form-control"
              type="firstname"
              name="first_name"
              onChange={handelChange}
              value={value.first_name}
              placeholder="Enter Name"
              required
            />
            <br /> <br />

            <TextField
              variant="outlined"
              label="Last Name"
              size="small"
              className="form-control"
              type="lastname"
              name="last_name"
              onChange={handelChange}
              value={value.last_name}
              placeholder="Enter Name"
              required
            />
            <br /> <br />

            <TextField
              variant="outlined"
              label="User Name"
              size="small"
              className="form-control"
              type="username"
              name="user_name"
              onChange={handelChange}
              value={value.user_name}
              placeholder="Enter Email"
              required
            />
            <br /> <br />

            <TextField
              variant="outlined"
              label="Email"
              size="small"
              className="form-control"
              type="email"
              name="email"
              onChange={handelChange}
              value={value.email}
              placeholder="Enter Email"
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
                Register
              </Button>
              <br /> <br />

              <span> &nbsp; Already have an account? </span>
              <Link to="/">login</Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export { Register };