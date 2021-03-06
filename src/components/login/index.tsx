import React from 'react';
import { Button, Typography, TextField, makeStyles } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import { BaseButton } from '../common';
import Page from '../page/public';
import { loginStore } from '../../stores';

const useStyles = makeStyles(() => ({
  topSpacing: {
    height: 160,
  },
  head: {
    fontWeight: 'bold',
    fontFamily: ['"Noto Sans"', 'sans-serif'].join(','),
    color: '#1976d2',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 300,
    height: 240,
  },
  input: {
    width: 270,
    '& label.Mui-focused': {
      color: '#1976d2',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#1976d2',
    },
  },
  setPass: {
    color: 'gray',
    textDecoration: 'underline',
    fontSize: 12,
  },
}));

// TODO: specify properties and their types
const LoginPage = observer(() => {
  const history = useHistory();
  const login = () => {
    if (loginStore.login()) {
      // TODO: should move prev page
      history.push('/');
    } else {
      // TODO: show login fail message
    }
  };
  const enter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      login();
    }
  };

  const classes = useStyles();
  return (
    <Page>
      <div className={classes.topSpacing} />
      <Typography className={classes.head} variant="h1">
        0auth
      </Typography>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          onKeyPress={(e) => enter(e)}
          value={loginStore.password}
          onChange={(e) => loginStore.setPassword(e.target.value)}
          type="password"
          label="Password"
        />
        <BaseButton icon={<LockOpenIcon />} onClick={login}>
          Start 0auth
        </BaseButton>
      </form>
      <Button
        onClick={(e) => history.push('/settings')}
        className={classes.setPass}
      >
        Set your password
      </Button>
    </Page>
  );
});

export default LoginPage;
