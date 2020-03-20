import React from "react";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { Header, Vector } from "views";

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
      </Grid>
    </Container>
  );
};

export default Main;
