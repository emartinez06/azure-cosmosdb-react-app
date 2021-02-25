import React from 'react';
import {AppBar,Button,Card,CardActions, CardContent, CardMedia,CssBaseline, Grid, Toolbar, Typography, makeStyles,Container, Link} from '@material-ui/core';
import { FindInPage } from '@material-ui/icons'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  navigation: {
    backgroundColor: '#7c7c7c'
  }
}));

// function getData(){
//   let cardsInfo;
//   fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
//     .then(response => response.json())
//     .then(data => {
//       cardsInfo = data.data;
//       console.log(cardsInfo);
//     })
//     .catch(err => console.log(err));
// }

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://emartinez.dev/">
        E. Martinez
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6];

  //let cardsInfo;
  //let dataUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes';
  axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    });
  // fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
  //   .then(response => response.json())
  //   .then(data => {
  //     cardsInfo = data.data;
  //     console.log(cardsInfo);
  //   })
  //   .catch(err => console.log(err));

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.navigation}>
        <Toolbar>
          <FindInPage className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Yugioh Card App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              It's time for a duel!!!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum sit amet
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Using Azure Cosmos DB with React
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default App;