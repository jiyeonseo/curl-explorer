import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { Button } from "baseui/button";


export default () => {
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>Simple CURL Explorer</StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button>Github</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}