import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
   login: {
     display: 'block'
   },
  loginForm: {
     width: '250px',
     margin: '50px auto'
  },
  regNav: {
     width: "100px",
    display: "flex",
    justifyContent: "space-between"
  }
}));
const LoginForm = () => {
  const classes = useStyles();
 return ( <div className={classes.loginForm}>
    <FormControl className={classes.login}>
   <InputLabel htmlFor="login">Log in </InputLabel>
   <Input
     id="login"
     startAdornment={
       <InputAdornment position="start">
         <AccountCircle/>
       </InputAdornment>
     }
   />
 </FormControl>
   <FormControl className={classes.margin}>
     <InputLabel htmlFor="password">Passsword </InputLabel>
     <Input
       id='password'
       startAdornment={
         <InputAdornment position="start">
           <Lock />
         </InputAdornment>
       }
     />
   </FormControl>
   <div className={classes.regNav}>
     <Link to="/">login</Link>
     <Link to="/registr">registr</Link>
   </div>
  </div> )
}

export default LoginForm
