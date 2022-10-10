import styled, { CSSObject } from "@emotion/styled";

export const Container = styled.div(
  (): CSSObject => ({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection: "column",
    borderRadius: "15px",
    margin: "10px",
    width: "22%",
    minWidth: "220px",
    height: "350px",
    "&>.title": {
      width: "100%",
      display: "-webkit-box",
      WebkitLineClamp: "1",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    "&>.image": {
      width: "100%",
      height: "60%",
      borderRadius: "10px",
      overflow: "hidden",
      objectFit: "cover",
    },
    "&>.time": {
      color: "gray",
      display: "flex",
      
      "&>.minute": {
        margin: "0 5px",
      },
    },

    "&>.desc": {
      color: "gray",
      display: "-webkit-box",
      WebkitLineClamp: "2",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    "&>.more-conainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      width: "100%",
      "&>.more": {
        padding: "7px 40px",
        textAlign: "center",
        borderRadius: "5px",
        border: "1px solid blue",
        color: "blue",
        cursor: "pointer",
      },
    },

    "@media (max-width:1120px)": {
      width: "30%",
    },
    "@media (max-width:880px)": {
      width: "46%",
    },
    "@media (max-width:540px)": {
      width: "100%",
    },
  }),
);
