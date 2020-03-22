import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Typography } from "@material-ui/core";

import stock02 from "assets/images/stock02.svg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: "#0067AF",
    padding: `0 ${theme.spacing(7)}px`
  },
  leftBlock: {
    flex: "0 0 50%",
    marginRight: theme.spacing(9),
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(6)
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(15),
    "& p": {
      flex: "0 0 40%",
      marginLeft: theme.spacing(18)
    }
  },
  dmd: {
    fontSize: "78px"
  },
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(6)
  },
  formats: {
    marginBottom: theme.spacing(5)
  },
  line: {
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly"
  }
}));

const Dmd = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.leftBlock}>
        <Box className={classes.header}>
          <div>
            <Typography
              variant="h1"
              gutterBottom={true}
              className={classes.dmd}
            >
              DMD
            </Typography>
            <Typography variant="h3">
              ДЫХАНИЕ.
              <br />
              МУЗЫКА.
              <br />
              ДВИЖЕНИЕ.
            </Typography>
          </div>
          <Typography variant="body2">
            Это уникальная методика, которая влияет на сознание, подсознание и
            тело.
            <br />
            <br />
            Протанцевав свои желания вероятность его исполнения увеличивается в
            разы
          </Typography>
        </Box>
        <iframe
          title="Youtube NRG Kerim"
          width="762"
          height="441"
          src="https://www.youtube.com/embed/T1OrhiBXsow"
        ></iframe>
      </Grid>
      <Grid item>
        <img src={stock02} alt="Танец" />
      </Grid>
      <Grid item className={classes.footer}>
        <Typography
          variant="h4"
          className={classes.formats}
          color="textSecondary"
        >
          ПРОЦЕСС
        </Typography>
        <div className={classes.line}>
          <span>1 ЧАС 30 МИНУТ</span>
          <span>/</span>
          <span>МЕДИТАЦИЯ</span>
          <span>/</span>
          <span>ДЫХАНИЕ ПОД МУЗЫКУ</span>
          <span>/</span>
          <span>ДВИЖЕНИЕ ПОД МУЗЫКУ</span>
        </div>
      </Grid>
    </Grid>
  );
};

export default Dmd;
