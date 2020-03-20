import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

import vectorLogo from "assets/images/logo-vector2.svg";
import kerim from "assets/images/kerim.svg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    backgroundImage: "url(/images/bg-vector.svg)",
    backgroundSize: "cover",
    padding: `0 ${theme.spacing(7)}px`
  },
  leftBlock: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(6)
  },
  title: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(6),
    "& img": {
      marginRight: theme.spacing(12)
    },
    "& h4": {
      paddingTop: theme.spacing(3)
    }
  },
  description: {
    width: "455px",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4)
  },
  rightBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  }
}));

const Vector = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <Grid item>
        <Grid container>
          <Grid item xl={7} className={classes.leftBlock}>
            <div className={classes.title}>
              <img src={vectorLogo} alt="vector logo" />
              <Typography variant="h4">
                ПСИХОЛОГИЧЕСКАЯ
                <br />
                ИГРА
              </Typography>
            </div>
            <Typography variant="body1" className={classes.description}>
              В 2008 году в Казахстан была привезена первая на то время игра,
              тогда она еще не называлась вектор и не была игрой. Сейчас это
              одно из популярнейших направлений для современного успешного
              человека.
            </Typography>
            <iframe
              title="Youtube NRG"
              width="760"
              height="440"
              src="https://www.youtube.com/embed/7VLclCpYwVI"
            ></iframe>
          </Grid>
          <Grid item xl={5} className={classes.rightBlock}>
            <img src={kerim} alt="Керимжан" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4">ФОРМАТ ИГРЫ</Typography>
      </Grid>
    </Grid>
  );
};

export default Vector;
