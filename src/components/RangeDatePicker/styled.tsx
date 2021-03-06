import styled from "../../theme";
import * as InputMask from "react-input-mask";

interface IRangeDateDiv {
  isGregorian: boolean;
}

export const RangeDateDiv = styled.div<IRangeDateDiv>`
  direction: ${(props) => (props.isGregorian ? "ltr" : "rtl")};
`;

export const InputMaskStyled = styled(InputMask)`
  font-family: Vazir;
`;
