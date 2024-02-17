import React,{useState} from 'react';
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useDispatch} from 'react-redux';
import useStyles from  './styles.js';
import {GoogleLogin,googleLogout} from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import Input from "./Input.js";

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp,setSignUp] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () =>{

  }

  const handleChange= () =>{

  }

  const googleSuccess = async (res) =>{
    let token = res.credential;
    // let decoded_text = jwt_decode(text);
    // console.log(decoded_text);

    try {
        dispatch({type:"AUTH",data:{res,token}});
    }catch (error) {

    }

  }

  const googleFailure = (error) =>{
    console.log(error);
    console.log("Google Sign In unsuccessful. Try Again");
  }

  const handleShowPassword = () =>{
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const switchMode = () =>{
     setSignUp((prevIsSignUp) => !prevIsSignUp);
     if(showPassword)
        handleShowPassword();
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {
                  isSignUp && (
                    <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                        <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                    </>
                  )
                }
                <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
            </Grid> 
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              { isSignUp ? 'Sign Up' : 'Sign In' }
            </Button>
            <GoogleLogin 
              theme="filled_blue"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            />
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button onClick={switchMode}>
                      {isSignUp ? 'Already have an Account? Sign In' :'Sign Up to Create an Account'}
                    </Button>
                </Grid>
            </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
