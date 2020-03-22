import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, Box, Card, CardContent } from "@material-ui/core";

import vectorLogo from "assets/images/logo-vector2.svg";
import kerim from "assets/images/kerim.svg";
import notForAll from "assets/images/not-for-all.svg";

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
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  cards: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(16)
  },
  card: {
    width: "421px",
    height: "283px"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    "& img": {
      alignSelf: "flex-start"
    }
  }
}));

const Vector = () => {
  const theme = useTheme();
  const classes = useStyles();

  const items = [
    {
      title: "VECTOR 1",
      subtitle: "4 ДНЯ",
      text: (
        <Typography variant="body2">
          Найдешь ответы
          <br />
          на главные вопросы:
          <br />
          кто я? что я могу? чего я хочу?
        </Typography>
      ),
      background: theme.palette.primary.main
    },
    {
      title: "VECTOR 2",
      subtitle: "5 ДНЕЙ",
      text: (
        <Typography variant="body2">
          Найдешь глубинные
          <br />
          убеждения и узнаешь
          <br />
          всю правду о себе
        </Typography>
      ),
      background: theme.palette.secondary.main
    },
    {
      title: "VECTOR PRO",
      subtitle: "3 МЕСЯЦА",
      additional: notForAll,
      text: (
        <Typography variant="body2">
          Невозможное -<br />
          возможно и ты
          <br />
          сделаешь это сам!
        </Typography>
      ),
      background: "url(/images/bg-card-gold.svg)"
    }
  ];

  const cards = items.map((item, index) => (
    <Card
      key={index}
      className={classes.card}
      style={{ background: item.background }}
    >
      <CardContent className={classes.cardContent}>
        <Box component="div">
          <Typography variant="h1">{item.title}</Typography>
          <Typography variant="subtitle1">{item.subtitle}</Typography>
        </Box>
        {item.additional && <img src={item.additional} alt={index} />}
        {item.text}
      </CardContent>
    </Card>
  ));

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
        <Typography variant="h4" align="center">
          ФОРМАТ ИГРЫ
        </Typography>
        <Box component="div" className={classes.cards}>
          {cards}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Vector;
