import styled, { CSSObject } from "@emotion/styled";

export const Container = styled.div(
  (): CSSObject => ({
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
  
      flexWrap: "wrap",
      maxWidth: "1600px",
      padding: "0px 80px",
      "@media (max-width:1120px)": {
        padding: "0 40px",
      },
      "@media (max-width:880px)": {
        padding: "0 20px",
      },
      "@media (max-width:540px)": {
        justifyContent: "center",
      },
    },
    "&>.pagination": {
      width: "100%",
      "& ul": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  }),
);
