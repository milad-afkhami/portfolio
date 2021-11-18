import React, { ComponentType } from "react";
import { Div, Text } from "@kits";
import {
  BottomSheet as RSBottomSheet,
  BottomSheetProps,
} from "react-spring-bottom-sheet";
import styled from "styled-components";

const StyledBottomSheet = styled(RSBottomSheet)`
  [data-rsbs-backdrop] {
    backdrop-filter: blur(6px);
  }
`;

interface Props extends BottomSheetProps {
  title?: String;
}

export const BottomSheet: ComponentType<Props> = ({
  children,
  expandOnContentDrag = true,
  title,
  header,
  ...rest
}) => {
  return (
    <StyledBottomSheet
      expandOnContentDrag={expandOnContentDrag}
      header={
        title ? (
          <Div flex={["center", "start"]} width="100%" height="4.5rem">
            <Text size="h-sm-b">{title}</Text>
          </Div>
        ) : (
          header || undefined
        )
      }
      {...rest}
    >
      {children}
    </StyledBottomSheet>
  );
};
