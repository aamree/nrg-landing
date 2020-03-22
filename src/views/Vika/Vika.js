import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: "url(/images/vika.svg) no-repeat",
    backgroundSize: "cover",
    padding: `0 ${theme.spacing(7)}px`
  },
  vika: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(3)
  },
  title: {
    marginBottom: theme.spacing(6)
  },
  list: {
    display: "flex",
    alignItems: "flex-start",
    "& ul": {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "flex-end"
    },
    "& ul li": {
      flex: "0 0",
      flexBasis: "30%",
      height: "60px"
    }
  },
  price: {
    maxWidth: "150px",
    marginTop: theme.spacing(5),
    borderTop: "1px solid #000",
    marginRight: theme.spacing(40)
  },
  video: {
    alignSelf: "flex-start",
    marginTop: theme.spacing(-8),
    marginLeft: theme.spacing(22),
    marginBottom: theme.spacing(8)
  }
}));

const Vika = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      alignItems="center"
    >
      <Grid item className={classes.vika}>
        <Typography variant="subtitle2">Виктория Цой</Typography>
      </Grid>
      <Grid item className={classes.title}>
        <Typography variant="h2">ПСИХОЛОГ</Typography>
      </Grid>
      <Grid item className={classes.list}>
        <List aria-label="List" disablePadding={true}>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="КОНСУЛЬТАЦИЯ" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="ОТНОШЕНИЯ" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="ТЕРАПИИ" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="КОНФЛИКТЫ" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="РОДОЛОГИЯ" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="РАССТАНОВКА" />
          </ListItem>
          <ListItem className={classes.price}>
            <ListItemText primary="50 000 тг." />
          </ListItem>
        </List>
      </Grid>
      <Grid item className={classes.video}>
        <iframe
          title="Youtube NRG Vika"
          width="762"
          height="441"
          src="https://www.youtube.com/embed/T1OrhiBXsow"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default Vika;
