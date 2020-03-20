import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

import fbIcon from "assets/images/facebook.svg";
import instaIcon from "assets/images/instagram.svg";
import vkIcon from "assets/images/vk.svg";
import logoNrg from "assets/images/logo-nrg.svg";

import { Slider } from "views";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "rgb(235, 82, 11)",
    backgroundImage: "url(/images/bg-header.svg)",
    backgroundSize: "cover",
    padding: `${theme.spacing(4)}px ${theme.spacing(7)}px`
  },
  header: {
    display: "flex",
    justifyContent: "flex-end"
  },
  socials: {
    width: "100px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(7),
    alignSelf: "flex-end"
  },
  logoNrg: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(10)
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(16)
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction="column">
      <Grid item className={classes.socials}>
        <img src={instaIcon} alt="instagram" />
        <img src={vkIcon} alt="vk" />
        <img src={fbIcon} alt="facebook" />
      </Grid>
      <Grid item className={classes.logoNrg}>
        <img src={logoNrg} alt="NRG logo" />
      </Grid>
      <Grid item>
        <Typography variant="h3" className={classes.title}>
          МЫ ЗА ЗДОРОВЫЙ И КРАСИВЫЙ МИР
        </Typography>
      </Grid>
      <Grid item>
        <Slider />
      </Grid>
    </Grid>
  );
}

export default Header;
