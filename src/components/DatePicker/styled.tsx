import styled from "../../theme";
import InputMask from "react-input-mask";

interface IDatePickerDiv {
  isGregorian: boolean;
}

export const DatePickerDiv = styled.div<IDatePickerDiv>`
  direction: ${(props) => (props.isGregorian ? "ltr" : "rtl")};
`;

export const InputMaskStyled = styled(InputMask)`
  font-family: Vazir;
`;
