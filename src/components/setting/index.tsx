import React from 'react';
import {
  Container,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';

import { BaseButton } from '../common';
import { Page } from '../page';

type SettingPageProps = {
  // TODO: Fill the setting page props
};

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
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
}));

export default function SettingPage() {
  const classes = useStyles();

  return (
    <Page>
      <Container className={classes.container}>
        <Typography className={classes.title}>Password setting</Typography>
        <TextField className={classes.input} type="password" label="Password" />
        <BaseButton>Save Password</BaseButton>
      </Container>
    </Page>
  );
}
