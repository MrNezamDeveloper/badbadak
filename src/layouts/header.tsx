import styled, { CSSObject } from "@emotion/styled";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BucketContext } from "../store/bucket";

const Header: React.FC<{ children: any }> = ({ children }) => {
  const { content } = useContext(BucketContext);
  console.log(content);
  return (
    <Container>
      <div className="header">
        <ul>
          <li className="wish-list">
            <Link to="/bucket" className="link">
              {`Wish Lists ${content?.id} `}
            </Link>
          </li>
          <li className="home">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </Container>
  );
};

export default Header;
const Container = styled.div(
  (): CSSObject => ({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    "&>.header": {
      height: "80px",
      padding: "5px 80px",
      position: "sticky",
      top: 0,
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      "&>ul": {
        display: "flex",
        "& li": {
          listStyleType: "none",
          padding: "5px 15px",
          "& .link": {
            color: "black",
            textDecoration: "none",
          },
        },
      },
    },
  }),
);
