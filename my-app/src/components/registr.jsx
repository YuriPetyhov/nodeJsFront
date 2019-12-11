import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import axios from 'axios'

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

const LoginForm = ( props ) => {

  const [form, setForm] = useState({
    login: '',
    password: ''
  })

  const [err, setErr] = useState(false)

  const handleSetForm = (e) => {

    setForm({...form, [e.target.name]: e.target.value})
  }
  const submitForm = (e) => {
    axios.post('http://localhost:3100/signup', {...form})
      .then(res => props.history.push('/'))
      .catch(error => {
        setErr(error.response.data.err)
       console.log(error.response)
      })

      e.preventDefault()
  }


  const classes = useStyles();
  return ( <form onSubmit={submitForm} className={classes.loginForm}>
    <FormControl className={classes.login}>
      <InputLabel htmlFor="login">Log in </InputLabel>
      <Input
        onChange={handleSetForm}
        id="login"
        name='login'
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle/>
          </InputAdornment>
        }
      />
      {err && <span> {err} </span>}
    </FormControl>
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="password">Passsword </InputLabel>
      <Input
        onChange={handleSetForm}
        id='password'
        name='password'
        startAdornment={
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        }
      />
    </FormControl>

    <button> Registration</button>
  </form> )
}

export default LoginForm
