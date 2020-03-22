import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Typography } from "@material-ui/core";

import kerimVika from "assets/images/kerim-vika.svg";
import logoMuza from "assets/images/taina-muzy2.svg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background:
      "url(/images/bg-muza.svg) no-repeat, linear-gradient(0deg, rgba(253,183,174,1) 0%, rgba(253,134,118,1) 100%)",
    backgroundSize: "cover",
    padding: `0 ${theme.spacing(7)}px`,
    outline: "2px solid #fff",
    outlineOffset: "-30px"
  },
  rightBlock: {
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(9),
    "& iframe": {
      marginLeft: theme.spacing(4)
    }
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    "& img": {
      flex: "0 0 auto"
    },
    "& p": {
      flex: "1 0 auto",
      marginLeft: theme.spacing(13)
    }
  }
}));
const Taina = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <img src={kerimVika} alt="Керим и Вика" />
      </Grid>
      <Grid item className={classes.rightBlock}>
        <Box className={classes.header}>
          <img src={logoMuza} alt="Лого Тайна Музы" />
          <Typography variant="body2">
            Вы когда нибудь были на женском
            <br />
            тренинге с мужским тренером?
            <br />
            <br />
            <br />
            Ты женщина?
            <br />О чем Ты думаешь?
            <br />
            Чего Ты хочешь?
          </Typography>
        </Box>
        <iframe
          title="Youtube NRG Kerim"
          width="762"
          height="441"
          src="https://www.youtube.com/embed/n4qqr_-dt-c"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default Taina;
