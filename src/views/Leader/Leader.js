import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import stock01 from "assets/images/stock01.svg";
import youngLider from "assets/images/young-lider.svg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background:
      "linear-gradient(25deg, rgba(190,239,166,1) 0%, rgba(147,202,232,1) 100%)",
    padding: `0 ${theme.spacing(7)}px`
  },
  rightBlock: {
    flex: "0 0 50%",
    marginLeft: theme.spacing(9),
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(6)
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(11),
    "& img": {
      flex: "0 0 auto"
    },
    "& p": {
      flex: "0 0 47%",
      marginLeft: theme.spacing(13)
    }
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(6),
    "& ul": {
      display: "flex",
      flexFlow: "row-reverse wrap",
      alignContent: "center",
      marginRight: theme.spacing(20)
    },
    "& ul li": {
      flex: "0 0",
      flexBasis: "35%"
    }
  },
  formats: {
    marginBottom: theme.spacing(5)
  },
  day: {
    maxWidth: "200px"
  }
}));

const Leader = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <img src={stock01} alt="Молодежь" />
      </Grid>
      <Grid item className={classes.rightBlock}>
        <Box className={classes.header}>
          <div>
            <img src={youngLider} alt="Лого Юный лидер" />
            <Typography variant="h3" color="primary">
              тренинг для детей
              <br />с 11-16 лет
            </Typography>
          </div>
          <Typography variant="body1">
            Данный курс специально разработан для всех ребят, желающих расти и
            развиваться.
            <br />
            <br />
            Уже с юного возраста закладывающий успешные установки и убеждения,
            которые помогут юному дарованию в его будущей и счастливой жизни.
          </Typography>
        </Box>
        <iframe
          title="Youtube NRG Kerim"
          width="762"
          height="441"
          src="https://www.youtube.com/embed/gZjYsctRWag"
        ></iframe>
      </Grid>
      <Grid item className={classes.footer}>
        <Typography variant="h4" className={classes.formats}>
          ФОРМАТ ПРОВЕДЕНИЯ
        </Typography>
        <List aria-label="List" disablePadding={true}>
          <ListItem disableGutters={true}>
            <ListItemIcon>
              <PlayArrowIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="ПСИХОДРАМЫ ВЗАИМООТНОШЕНИЙ" />
          </ListItem>
          <ListItem disableGutters={true}>
            <ListItemIcon>
              <PlayArrowIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="ПРАКТИЧЕСКИЕ УПРАЖНЕНИЯ" />
          </ListItem>
          <ListItem
            className={classes.day}
            alignItems="center"
            disableGutters={true}
          >
            <ListItemIcon>
              <PlayArrowIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="2 ДНЯ" />
          </ListItem>
          <ListItem disableGutters={true}>
            <ListItemIcon>
              <PlayArrowIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="КОНФЛИКТОЛОГИЯ" />
          </ListItem>
          <ListItem disableGutters={true}>
            <ListItemIcon>
              <PlayArrowIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText primary="ПСИХОЛОГИЧЕСКАЯ ИГРА" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Leader;
