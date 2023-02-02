import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckBoxRoot = styled(Checkbox.Root)`
  width: 35px;
  height: 35px;
  background-color: #fff;
  border: none;
  box-shadow: 2px 2px 4px #02020233;
  border-radius: 3px;
  transition: 0.3s ease;

  &[data-state="checked"] {
    background-color: aqua;
  }
`;

export const CheckBoxIndicator = styled(Checkbox.Indicator)`
  color: #fff;
`;
