import React from "react";
import { Col, Row, Container as GridContainer } from "react-grid-system";
import Checkbox from "../../components/RadixComponents/Checkbox";

import { Container, FlexRow, Content } from "./styles";

function Radix() {
  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <Content>
              <FlexRow>
                <Checkbox />
                <Checkbox />
                <Checkbox />
              </FlexRow>
            </Content>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
}

export default Radix;
