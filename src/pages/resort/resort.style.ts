import styled, { CSSObject } from "@emotion/styled";

export const Container = styled.div(
    (): CSSObject => ({
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      borderRadius: "10px",
      padding: "10px",
      border: "1px solid blue",
      width: "90%",
      margin: "20px auto",
  
      "&>.img": {
        width: "48%",
        "&>img": {
          width: "100%",
          borderRadius: "10px",
          objectFit: "cover",
          objectPosition: "center",
        },
      },
      "&>.text": {
        width: "48%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "end",
        "&>.title": {
          textAlign: "right",
          fontSize: "18px",
          fontWeight: "bold",
        },
        "&>.description": {
          textAlign: "right",
          marginTop: "50px",
        },
        "&>.footer": {
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginTop: "50px",
          justifyContent: "space-between",
        },
      },
      "@media (max-width:800px)": {
        flexDirection: "column",
        "&>.img": {
          width: "100%",
        },
        "&>.text": {
          width: "100%",
        },
      },
      "@media (max-width:500px)": {
        "&>.text>.description": {
          marginTop: "10px",
        },
      },
    }),
  );
  