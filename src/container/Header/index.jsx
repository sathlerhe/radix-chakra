import React from "react";
import { Container as GridContainer, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

import { HeaderContainer, HeaderContent, LinkDiv } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <GridContainer>
        <Row>
          <Col>
            <HeaderContent>
              <img src="/assets/react.png" alt="Logo do React" />

              <LinkDiv>
                <Link to="/">Radix</Link>
                <Link to="/chakra">Chakra</Link>
              </LinkDiv>
            </HeaderContent>
          </Col>
        </Row>
      </GridContainer>
    </HeaderContainer>
  );
}

export default Header;
