import { BottomSheet } from "react-spring-bottom-sheet";
import styled from "styled-components";

export const StyledBottomSheet = styled(BottomSheet)`
  [data-rsbs-backdrop] {
    backdrop-filter: blur(6px);
  }
`;
