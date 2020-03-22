import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: "#E9EDF0",
    padding: `${theme.spacing(6)}px ${theme.spacing(7)}px`
  },
  leftBlock: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: theme.spacing(16)
  },
  envelope: {
    width: "150px",
    height: "150px",
    background: "#969A9A",
    maskImage: "url('/images/note.svg')"
  },
  rightBlock: {
    "& h4": {
      marginBottom: theme.spacing(3)
    },
    "& p": {
      width: "550px",
      marginBottom: theme.spacing(3)
    }
  },
  follow: {
    "& button": {
      height: "44.75px"
    }
  },
  email: {
    width: "380px"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item lg={5} className={classes.leftBlock}>
        <div className={classes.envelope} />
      </Grid>
      <Grid item lg={7}>
        <Box className={classes.rightBlock}>
          <Typography variant="h4">ПОДПИСАТЬСЯ НА АКЦИИ И НОВОСТИ</Typography>
          <Typography variant="body1">
            Оставьте свой e-mail, чтобы быть в курсе! Вы первыми узнаете о
            концертах, премьерах и специальных акциях.
          </Typography>
          <form className={classes.follow}>
            <TextField
              className={classes.email}
              label="Электронная почта"
              variant="outlined"
              size="small"
            />
            <Button variant="contained" color="primary">
              ПОДПИСАТЬСЯ
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
