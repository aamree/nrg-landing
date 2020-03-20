import React from "react";
import Swiper from "react-id-swiper";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "1200px",
    margin: "0 auto"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "283px",
    height: "283px",
    marginBottom: theme.spacing(10),
    "& span": {
      textAlign: "center",
      flex: "0 0 auto",
      paddingBottom: "15px"
    },
    "& img": {
      flex: "1 0 auto"
    }
  }
}));

const Slider = props => {
  const classes = useStyles();

  const params = {
    effect: "coverflow",
    grabCursor: false,
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  const items = [
    {
      background: "#141515",
      color: "textSecondary",
      title: `ПСИХОЛОГИЧЕСКАЯ ИГРА`,
      logo: "images/logo-vector.svg",
      width: 144,
      height: 65,
      titleWidth: "168px"
    },
    {
      background: "#FFFFFF",
      title: "ЖЕНСКИЙ ТРЕНИНГ",
      logo: "images/taina-muzy.svg",
      width: 148,
      height: 157,
      titleWidth: "85px"
    },
    {
      background: "#FFBDB4",
      title: "ТРЕНИНГ НА ОСТРОВАХ",
      logo: "images/victoria-traning.svg",
      width: 164,
      height: 61,
      titleWidth: "113px"
    },
    {
      background:
        "linear-gradient(140deg, rgba(147,202,232,1) 0%, rgba(190,239,166,1) 100%)",
      title: "ТРЕНИНГ ДЛЯ ДЕТЕЙ 11-16 ЛЕТ",
      logo: "images/young-lider.svg",
      width: 108,
      height: 58,
      titleWidth: "164px"
    }
  ];

  const slides = items.map((item, index) => (
    <div
      key={index}
      style={{ background: `${item.background}` }}
      className={classes.item}
    >
      <img
        src={item.logo}
        alt={index}
        width={item.width}
        height={item.height}
      />
      <Typography
        variant="caption"
        color={item.color}
        style={{ width: `${item.titleWidth}` }}
      >
        {item.title}
      </Typography>
    </div>
  ));

  return (
    <div className={classes.root} justify="center">
      <Swiper {...params}>{slides}</Swiper>
    </div>
  );
};

export default Slider;
