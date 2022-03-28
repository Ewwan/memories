import React, { useState } from 'react';
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Toolbar,
} from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Toolbar>
          <Typography
            className={classes.heading}
            variant='h2'
            noWrap
            component='div'
            align='center'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Memories
          </Typography>
          <img
            src={memories}
            className={classes.image}
            alt='memories'
            height='100'
          />
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
