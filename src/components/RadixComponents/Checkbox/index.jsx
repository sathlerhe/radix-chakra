import { Check } from "phosphor-react";
import { CheckBoxRoot, CheckBoxIndicator } from "./styles";

function Checkbox() {
  return (
    <CheckBoxRoot defaultChecked>
      <CheckBoxIndicator>
        <Check size={25} />
      </CheckBoxIndicator>
    </CheckBoxRoot>
  );
}

export default Checkbox;
