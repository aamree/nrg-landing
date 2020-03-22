import React from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Header, Vector, Taina, Vika, Leader, Dmd, Footer } from "views";

const useStyles = makeStyles(theme => ({
  fullWidth: {
    width: "100%"
  }
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item className={classes.fullWidth}>
          <Header />
        </Grid>
        <Grid item className={classes.fullWidth}>
          <Vector />
        </Grid>
        <Grid item className={classes.fullWidth}>
          <Taina />
        </Grid>
        <Grid item className={classes.fullWidth}>
          <Vika />
        </Grid>
        <Grid item className={classes.fullWidth}>
          <Leader />
        </Grid>
        <Grid item className={classes.fullWidth}>
          <Dmd />
        </Grid>
        <Grid item className={classes.fullWidth}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
