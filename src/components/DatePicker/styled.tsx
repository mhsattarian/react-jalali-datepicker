import styled from "../../theme";
import InputMask from "react-input-mask";
console.log("🚀 ~ file: styled.tsx ~ line 3 ~ InputMask", InputMask);

interface IDatePickerDiv {
  isGregorian: boolean;
}

export const DatePickerDiv = styled.div<IDatePickerDiv>`
  direction: ${(props) => (props.isGregorian ? "ltr" : "rtl")};
`;

export const InputMaskStyled = styled(InputMask)`
  font-family: Vazir;
`;
