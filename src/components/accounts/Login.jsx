import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled("img")({
  width: 200,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  height: 40px;
  border-radius: 4px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  height: 40px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 18px;
`;

const Login = () => {
  const imagURL =
    "https://cdn.pixabay.com/photo/2017/03/17/11/38/blog-2151307_1280.png";

  const [account, setAccount] = useState("login");
  const toggleSignup = () => {
    account === "signup" ? setAccount("login") : setAccount("signup");
  };

  return (
    <Component>
      <Box>
        <Image src={imagURL} alt="Login" />
        {account === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter username" />
            <TextField variant="standard" label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" label="Enter Name" />
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />
            <SignupButton variant="contained">Signup</SignupButton>
            <Text>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
